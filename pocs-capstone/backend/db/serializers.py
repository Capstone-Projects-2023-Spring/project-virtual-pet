from rest_framework import serializers
from db.models import NewUser, Avatar, Task, Inventory
from django.contrib.auth.password_validation import validate_password


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ('email', 'username', 'password',
                  'bio', 'birthday', 'first_name')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ['id',
                  'canvas_token',
                  'tutorial',
                  'email',
                  'username',
                  'first_name',
                  'join_date',
                  'birthday',
                  'bio']


"""
Note: not sure if I'll need to only use subsets of fields later so 
explicitly including all here.
"""


class AvatarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avatar
        fields = [  # 'avatar_owner',
            'avatar_id',
            'avatar_type',
            'total_xp',
            'last_interaction',
            'last_feed', 'pet_name',
            'flavour_text', 'palette']


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = [
            # 'username',
            'task_id',
            'title',
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
            'assignment_id',
            'received',
        ]


class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = [
            # 'inventory_owner',
            'inventory_id',
            'candy_base_type',
            'candy_level',
            'quantity'
        ]


class CanvasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = [
            'user_id',
            'task_id',
            'title',
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
            'assignment_id',
            'unique_canvas_tag',
            'received',
        ]
    # TODO - consider overriding create rather than doing validation in the view
    """
    def create(self,validated_data):
        obj, created = Task.objects.update_or_create(
            tag = validated_data.get('unique_canvas_tag'),
            defaults=validated_data
        )
        print(created)
        return obj
    """
