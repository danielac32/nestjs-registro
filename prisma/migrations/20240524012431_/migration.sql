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
CREATE TABLE "Academico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fechaEscolarDesde" DATETIME NOT NULL,
    "fechaEscolarHasta" DATETIME NOT NULL,
    "plantelOrigen" TEXT NOT NULL,
    "repitiente" BOOLEAN NOT NULL DEFAULT false,
    "asignacionCursa" TEXT NOT NULL,
    "asignacionPendiente" TEXT NOT NULL,
    "pruebaVocacional" BOOLEAN NOT NULL,
    "tipoEstudiante" TEXT NOT NULL,
    "cursoId" INTEGER NOT NULL,
    "id_estudiante" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Academico_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Academico_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "EstudianteEntity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Retiro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "representante" TEXT NOT NULL,
    "motivo" TEXT NOT NULL,
    "responsable" TEXT NOT NULL,
    "cedulaResponsable" TEXT NOT NULL,
    "cargoResponsable" TEXT NOT NULL,
    "id_estudiante" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Retiro_id_estudiante_fkey" FOREIGN KEY ("id_estudiante") REFERENCES "EstudianteEntity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Curso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Asignatura" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "profesor" TEXT NOT NULL,
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
CREATE TABLE "PerfilEstudiante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "isActive" BOOLEAN DEFAULT true,
    "cedula" TEXT,
    "cedulaEscolar" TEXT,
    "origen" TEXT NOT NULL,
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
    "numEmergencia" TEXT NOT NULL,
    "parentesco" TEXT NOT NULL,
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
CREATE UNIQUE INDEX "Academico_cursoId_key" ON "Academico"("cursoId");

-- CreateIndex
CREATE UNIQUE INDEX "Retiro_id_estudiante_key" ON "Retiro"("id_estudiante");

-- CreateIndex
CREATE UNIQUE INDEX "EstudianteEntity_id_perfil_key" ON "EstudianteEntity"("id_perfil");

-- CreateIndex
CREATE UNIQUE INDEX "EstudianteEntity_id_representante_key" ON "EstudianteEntity"("id_representante");
