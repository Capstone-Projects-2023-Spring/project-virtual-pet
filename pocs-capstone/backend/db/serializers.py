from rest_framework import serializers
from db.models import NewUser
from django.contrib.auth.password_validation import validate_password

class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance 
    
class UpdateUserSerializer(serializers.ModelSerializer):
    pass

class AvatarSerializer(serializers.ModelSerializer):
    pass

class TaskSerializer(serializers.ModelSerializer):
    pass

class InventorySerializer(serializers.ModelSerializer):
    pass

