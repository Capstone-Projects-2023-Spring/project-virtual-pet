from rest_framework import serializers
from db.models import NewUser, Avatar, Task, Inventory
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
    
"""
Note: not sure if I'll need to only use subsets of fields later so 
explicitly including all here.
"""

class AvatarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avatar
        fields = [#'avatar_owner',
                'avatar_id',
                 'avatar_type',
                 'total_xp',
                 'last_interaction',
                 'last_feed','pet_name',
                 'flavour_text']

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = [
            #'username',
            'task_id',
            'due_date',
            'created_date',
            'completed_date',
            'completed',
            'active',
            'task_type',
            'task_level',
            'recurring',
            'recurring_time_delta',
            'description',
            'course_id',
            'assignment_id'
        ]
    

class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = [
            #'inventory_owner',
            'inventory_id',
            'candy_base_type',
            'candy_level',
            'quantity'
        ]

