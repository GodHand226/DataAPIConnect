# Generated by Django 3.2.13 on 2023-09-04 09:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_user', '0010_alter_user_api_key'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='api_key',
            field=models.CharField(db_index=True, default='141b9f12d4c025818f3e609927669d120232cfb32aa44d14b0462396c8cb9018', max_length=255, unique=True),
        ),
    ]