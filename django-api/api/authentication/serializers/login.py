import jwt
from rest_framework import serializers, exceptions
from django.contrib.auth import authenticate
from datetime import datetime, timedelta
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from api.user.models import User
from api.authentication.models import ActiveSession


def _generate_jwt_token(user):
    token = jwt.encode(
        {"id": user.pk, "exp": datetime.utcnow() + timedelta(days=7)},
        settings.SECRET_KEY,
    )

    return token


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=255)
    username = serializers.CharField(max_length=255, read_only=True)
    password = serializers.CharField(max_length=128, write_only=True)

    def validate(self, data):
        email = data.get("email", None)
        password = data.get("password", None)

        if email is None:
            raise exceptions.ValidationError(
                {"success": False, "msg": "Email is required to login"}
            )
        if password is None:
            raise exceptions.ValidationError(
                {"success": False, "msg": "Password is required to log in."}
            )
        user = authenticate(username=email, password=password)
        if user is None:
            raise exceptions.AuthenticationFailed({"success": False, "msg": "Wrong credentials"})

        if not user.is_active:
            raise exceptions.ValidationError(
                {"success": False, "msg": "User is not active"}
            )
        
        if not user.is_verified:
            raise exceptions.ValidationError(
                {"success": False, "msg": "You have to verify Email"}
            )

        try:
            print("1")
            session = ActiveSession.objects.get(user=user)
            print("2")
            if not session.token:
                raise ValueError
            print("3")
            jwt.decode(session.token, settings.SECRET_KEY, algorithms=["HS256"])

        except (ObjectDoesNotExist, ValueError, jwt.ExpiredSignatureError):
            session = ActiveSession.objects.create(
                user=user, token=_generate_jwt_token(user)
            )
        print("4")
        return {
            "success": True,
            "token": session.token,
            "user": {"_id": user.pk, "username": user.username, "email": user.email},
        }
