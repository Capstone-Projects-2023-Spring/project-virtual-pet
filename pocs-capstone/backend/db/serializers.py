from rest_framework import serializers

from .models import Note

class NoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Note
        fields = ('note_text', 'note_id')