# Generated by Django 3.2.13 on 2023-09-04 09:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_user', '0008_alter_user_api_key'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='api_key',
            field=models.CharField(db_index=True, default='ec9174e2f3e18ed66c054ca4da5c9e9b6a579c787428088c0de561d11bb9f378', max_length=255, unique=True),
        ),
    ]
