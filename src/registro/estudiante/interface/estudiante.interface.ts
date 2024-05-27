export interface Perfil{
  name: string;
  email?: string;
  isActive?: boolean;
  cedula?: string;
  cedulaEscolar?: string;
  origen?: string;
  direccion: string;
  telefono?: string;
  medicina: boolean;
  alergia: boolean;
}
export interface Representante{
  madre?: string;
  cedulaM?: string;
  telefonoM?: string;
  emailM?: string;
  profesionM?: string;
  viveConEstuanteM?: boolean;
  padre?: string;
  cedulaP?: string;
  telefonoP?: string;
  emailP?: string;
  profesionP?: string;
  viveConEstuanteP?: boolean;
  numEmergencia?: string;
  parentesco?: string;
  nombreRepresentante: string;
}

 

export interface Academico{
  fechaEscolarDesde: string;
  fechaEscolarHasta: string;
  plantelOrigen?: string;
  repitiente?: boolean; 
  curso?: number; 
  materiasAprobadas?: string[];
  materiasAplazadas?: string[];
  pruebaVocacional?: boolean; 
  tipoEstudiante?: string;
}
export interface CrearEstudiante{
perfilEstudiante:Perfil;
representante:Representante;
academico:Academico
}

export interface EstudianteEntityInterface {
  id: number;
  id_perfil: number;
  id_representante: number;
  createdAt: string;
}
export interface EstudianteResponse{
 estudiante:EstudianteEntityInterface;
}