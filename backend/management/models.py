from django.db import models

GENDER_CHOICES = [
        ('Hombre', 'Hombre'),
        ('Mujer', 'Mujer'),
        ('Otros', 'Otros'),
        ('Prefiero no decir', 'Prefiero no decir'),
    ]

# Create your models here.
class Member(models.Model):
    MEMBERSHIP_STATUS_CHOICES = [
        ('Activo', 'Activo'),
        ('Expirado', 'Expirado'),
        ('Suspendido', 'Suspendido'),
        ('Cancelado', 'Cancelado'),
    ]

    MEMBERSHIP_CHOICES = [
        ('Mensual', 'Mensual'),
        ('Diario', 'Diario'),
        ('Asistencias', 'Asistencias'),
    ]

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100, unique=True)
    cell_phone = models.CharField(max_length=15)

    date_of_birth = models.DateField(null=True, blank=True)
    date_joined = models.DateField(auto_now_add=True)

    membership_type = models.CharField(max_length=50, choices=MEMBERSHIP_CHOICES,default='Diario')
    membership_start_date = models.DateField()
    membership_end_date = models.DateField()
    membership_status = models.CharField(
        max_length=20, choices=MEMBERSHIP_STATUS_CHOICES, default='Activo'
    )

    gender = models.CharField(max_length=20, choices=GENDER_CHOICES)
    height = models.FloatField(null=True, blank=True)  # In cm
    weight = models.FloatField(null=True, blank=True)  # In kg
    
    membership_notes = models.TextField(blank=True, null=True)
    member_notes = models.TextField(blank=True, null=True)

    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.gender} - {self.membership_status}"

class Trainer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100, unique=True)
    cell_phone = models.CharField(max_length=15)
    gender = models.CharField(
        max_length=20, 
        choices=GENDER_CHOICES
    )
    specialization = models.CharField(max_length=100)  # Example: Strength Training, Yoga, etc.
    years_of_experience = models.IntegerField()
    certifications = models.TextField(blank=True)  # Optional
    availability = models.CharField(max_length=100)  # Example: "Monday-Friday, 8 AM - 5 PM"
    salary = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.gender} - {self.specialization}"