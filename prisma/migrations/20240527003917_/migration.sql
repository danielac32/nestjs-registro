-- CreateTable
CREATE TABLE "userEntity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "rol" TEXT NOT NULL DEFAULT 'user',
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Curso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "num" INTEGER
);

-- CreateTable
CREATE TABLE "Asignatura" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "profesor" TEXT,
    "cursoId" INTEGER NOT NULL,
    CONSTRAINT "Asignatura_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Notas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" REAL NOT NULL,
    "asignaturaId" INTEGER NOT NULL,
    CONSTRAINT "Notas_asignaturaId_fkey" FOREIGN KEY ("asignaturaId") REFERENCES "Asignatura" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MateriasAprobadas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "academicoId" INTEGER NOT NULL,
    CONSTRAINT "MateriasAprobadas_academicoId_fkey" FOREIGN KEY ("academicoId") REFERENCES "Academico" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MateriasAplazadas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "academicoId" INTEGER NOT NULL,
    CONSTRAINT "MateriasAplazadas_academicoId_fkey" FOREIGN KEY ("academicoId") REFERENCES "Academico" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Academico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fechaEscolarDesde" DATETIME NOT NULL,
    "fechaEscolarHasta" DATETIME NOT NULL,
    "plantelOrigen" TEXT,
    "repitiente" BOOLEAN DEFAULT false,
    "pruebaVocacional" BOOLEAN,
    "tipoEstudiante" TEXT,
    "curso" INTEGER,
    "id_estudiante" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Academico_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "EstudianteEntity" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Retiro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "representante" TEXT,
    "motivo" TEXT,
    "responsable" TEXT,
    "cedulaResponsable" TEXT,
    "cargoResponsable" TEXT,
    "id_estudiante" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Retiro_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "EstudianteEntity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PerfilEstudiante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "isActive" BOOLEAN DEFAULT true,
    "cedula" TEXT,
    "direcion" TEXT NOT NULL,
    "telefono" TEXT,
    "medicina" BOOLEAN DEFAULT false,
    "alergia" BOOLEAN DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Representante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "madre" TEXT,
    "cedulaM" TEXT,
    "telefonoM" TEXT,
    "emailM" TEXT,
    "profesionM" TEXT,
    "viveConEstuanteM" BOOLEAN,
    "padre" TEXT,
    "cedulaP" TEXT,
    "telefonoP" TEXT,
    "emailP" TEXT,
    "profesionP" TEXT,
    "viveConEstuanteP" BOOLEAN,
    "numEmergencia" TEXT,
    "parentesco" TEXT,
    "nombreRepresentante" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "EstudianteEntity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_perfil" INTEGER NOT NULL,
    "id_representante" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "EstudianteEntity_id_perfil_fkey" FOREIGN KEY ("id_perfil") REFERENCES "PerfilEstudiante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EstudianteEntity_id_representante_fkey" FOREIGN KEY ("id_representante") REFERENCES "Representante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "userEntity_email_key" ON "userEntity"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Retiro_id_estudiante_key" ON "Retiro"("id_estudiante");

-- CreateIndex
CREATE UNIQUE INDEX "EstudianteEntity_id_perfil_key" ON "EstudianteEntity"("id_perfil");

-- CreateIndex
CREATE UNIQUE INDEX "EstudianteEntity_id_representante_key" ON "EstudianteEntity"("id_representante");
