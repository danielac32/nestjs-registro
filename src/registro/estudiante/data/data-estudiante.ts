import {
  Perfil,
  Representante,
  Academico,
  CrearEstudiante
} from '../interface/estudiante.interface'


 export const EstudiantesData: CrearEstudiante[] = [
  {
    perfilEstudiante: {
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      isActive: true,
      cedula: '12345678',
      //cedulaEscolar: '87654321',
      //origen: 'Caracas',
      direccion: 'Calle Falsa 123',
      telefono: '555-1234',
      medicina: true,
      alergia: false
    },
    representante: {
      madre: 'Ana Pérez',
      cedulaM: '123456789',
      telefonoM: '555-6789',
      emailM: 'ana.perez@example.com',
      profesionM: 'Ingeniera',
      viveConEstuanteM: true,
      padre: 'Pedro Pérez',
      cedulaP: '987654321',
      telefonoP: '555-9876',
      emailP: 'pedro.perez@example.com',
      profesionP: 'Médico',
      viveConEstuanteP: true,
      numEmergencia: '555-0000',
      parentesco: 'Tía',
      nombreRepresentante: 'Luisa Pérez'
    },
    academico: {
      fechaEscolarDesde: '2024-05-24T16:16:50.786Z',
      fechaEscolarHasta: '2024-05-24T16:16:50.786Z',
      plantelOrigen: 'Colegio Nacional',
      repitiente: false,
      curso: 1,
      materiasAprobadas: ['Matemáticas', 'Lengua'],
      materiasAplazadas: ['Física', 'Química'],
      pruebaVocacional: true,
      tipoEstudiante: 'Nuevo Ingreso'
    }
  },
  {
    perfilEstudiante: {
      name: 'Maria García',
      email: 'maria.garcia@example.com',
      isActive: true,
      cedula: '23456789',
      //cedulaEscolar: '98765432',
      //origen: 'Valencia',
      direccion: 'Avenida Siempre Viva 456',
      telefono: '555-2345',
      medicina: false,
      alergia: true
    },
    representante: {
      madre: 'Lucía García',
      cedulaM: '234567890',
      telefonoM: '555-5678',
      emailM: 'lucia.garcia@example.com',
      profesionM: 'Abogada',
      viveConEstuanteM: true,
      padre: 'Carlos García',
      cedulaP: '876543210',
      telefonoP: '555-8765',
      emailP: 'carlos.garcia@example.com',
      profesionP: 'Contador',
      viveConEstuanteP: true,
      numEmergencia: '555-1111',
      parentesco: 'Tío',
      nombreRepresentante: 'Raúl García'
    },
    academico: {
      fechaEscolarDesde: '2024-05-24T16:16:50.786Z',
      fechaEscolarHasta: '2024-05-24T16:16:50.786Z',
      plantelOrigen: 'Instituto Privado',
      repitiente: false,
      curso: 2,
      materiasAprobadas: ['Biología', 'Historia'],
      materiasAplazadas: ['Matemáticas', 'Química'],
      pruebaVocacional: true,
      tipoEstudiante: 'Nuevo Ingreso'
    }
  },
  {
    perfilEstudiante: {
      name: 'Luis Martínez',
      email: 'luis.martinez@example.com',
      isActive: true,
      cedula: '34567890',
      //cedulaEscolar: '87654321',
      //origen: 'Maracaibo',
      direccion: 'Calle Primavera 789',
      telefono: '555-3456',
      medicina: false,
      alergia: false
    },
    representante: {
      madre: 'María Martínez',
      cedulaM: '345678901',
      telefonoM: '555-6789',
      emailM: 'maria.martinez@example.com',
      profesionM: 'Doctora',
      viveConEstuanteM: true,
      padre: 'José Martínez',
      cedulaP: '765432109',
      telefonoP: '555-9876',
      emailP: 'jose.martinez@example.com',
      profesionP: 'Ingeniero',
      viveConEstuanteP: true,
      numEmergencia: '555-2222',
      parentesco: 'Abuelo',
      nombreRepresentante: 'Carlos Martínez'
    },
    academico: {
      fechaEscolarDesde: '2024-05-24T16:16:50.786Z',
      fechaEscolarHasta: '2024-05-24T16:16:50.786Z',
      plantelOrigen: 'Liceo Bolivariano',
      repitiente: false,
      curso: 3,
      materiasAprobadas: ['Geografía', 'Inglés'],
      materiasAplazadas: ['Química', 'Física'],
      pruebaVocacional: true,
      tipoEstudiante: 'Nuevo Ingreso'
    }
  },
  {
    perfilEstudiante: {
      name: 'Ana López',
      email: 'ana.lopez@example.com',
      isActive: true,
      cedula: '45678901',
      //cedulaEscolar: '76543210',
      //origen: 'Barquisimeto',
      direccion: 'Avenida Principal 101',
      telefono: '555-4567',
      medicina: true,
      alergia: true
    },
    representante: {
      madre: 'Elena López',
      cedulaM: '456789012',
      telefonoM: '555-7890',
      emailM: 'elena.lopez@example.com',
      profesionM: 'Profesora',
      viveConEstuanteM: true,
      padre: 'Fernando López',
      cedulaP: '654321098',
      telefonoP: '555-8765',
      emailP: 'fernando.lopez@example.com',
      profesionP: 'Arquitecto',
      viveConEstuanteP: true,
      numEmergencia: '555-3333',
      parentesco: 'Hermana',
      nombreRepresentante: 'Laura López'
    },
    academico: {
      fechaEscolarDesde: '2024-05-24T16:16:50.786Z',
      fechaEscolarHasta: '2024-05-24T16:16:50.786Z',
      plantelOrigen: 'Unidad Educativa',
      repitiente: false,
      curso: 4,
      materiasAprobadas: ['Educación Física', 'Ciencias'],
      materiasAplazadas: ['Matemáticas', 'Historia'],
      pruebaVocacional: true,
      tipoEstudiante: 'Nuevo Ingreso'
    }
  }
];
