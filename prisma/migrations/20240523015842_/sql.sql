-- CreateTable
CREATE TABLE `userEntity` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT TRUE,
    `rol` VARCHAR(255) NOT NULL DEFAULT 'user',
    `password` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY `userEntity_email_key` (`email`)
);

-- CreateTable
CREATE TABLE `Representante` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `madre` VARCHAR(255) NOT NULL,
    `cedulaM` VARCHAR(255) NOT NULL,
    `telefonoM` VARCHAR(255) NOT NULL,
    `emailM` VARCHAR(255) NOT NULL,
    `profesionM` VARCHAR(255) NOT NULL,
    `viveConEstuanteM` BOOLEAN NOT NULL,
    `padre` VARCHAR(255) NOT NULL,
    `cedulaP` VARCHAR(255) NOT NULL,
    `telefonoP` VARCHAR(255) NOT NULL,
    `emailP` VARCHAR(255) NOT NULL,
    `profesionP` VARCHAR(255) NOT NULL,
    `viveConEstuanteP` BOOLEAN NOT NULL,
    `numEmergencia` VARCHAR(255) NOT NULL,
    `parentesco` VARCHAR(255) NOT NULL,
    `nombreRepresentante` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE `Academico` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `fechaEscolarDesde` DATETIME NOT NULL,
    `fechaEscolarHasta` DATETIME NOT NULL,
    `plantelOrigen` VARCHAR(255) NOT NULL,
    `repitiente` BOOLEAN NOT NULL DEFAULT FALSE,
    `asignacionCursa` VARCHAR(255) NOT NULL,
    `asignacionPendiente` VARCHAR(255) NOT NULL,
    `pruebaVocacional` BOOLEAN NOT NULL,
    `tipoEstudiante` VARCHAR(255) NOT NULL,
    `cursoId` INT NOT NULL,
    `id_estudiante` INT NOT NULL,
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (`id_estudiante`) REFERENCES `EstudianteEntity`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
    UNIQUE KEY `Academico_cursoId_key` (`cursoId`)
);

-- CreateTable
CREATE TABLE `Retiro` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `representante` VARCHAR(255) NOT NULL,
    `motivo` VARCHAR(255) NOT NULL,
    `responsable` VARCHAR(255) NOT NULL,
    `cedulaResponsable` VARCHAR(255) NOT NULL,
    `cargoResponsable` VARCHAR(255) NOT NULL,
    `id_estudiante` INT NOT NULL,
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`id_estudiante`) REFERENCES `EstudianteEntity`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
    UNIQUE KEY `Retiro_id_estudiante_key` (`id_estudiante`)
);

-- CreateTable
CREATE TABLE `PerfilEstudiante` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT TRUE,
    `cedula` VARCHAR(255) NOT NULL,
    `cedulaEscolar` VARCHAR(255) NOT NULL,
    `origen` VARCHAR(255) NOT NULL,
    `direcion` VARCHAR(255) NOT NULL,
    `telefono` VARCHAR(255) NOT NULL,
    `medicina` BOOLEAN NOT NULL DEFAULT FALSE,
    `alergia` BOOLEAN NOT NULL DEFAULT FALSE,
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY `PerfilEstudiante_email_key` (`email`)
);

-- CreateTable
CREATE TABLE `Curso` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(255) NOT NULL
);

-- CreateTable
CREATE TABLE `Asignatura` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `profesor` VARCHAR(255) NOT NULL,
    `cursoId` INT NOT NULL,
    FOREIGN KEY (`cursoId`) REFERENCES `Curso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE `Notas` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `valor` FLOAT NOT NULL,
    `asignaturaId` INT NOT NULL,
    FOREIGN KEY (`asignaturaId`) REFERENCES `Asignatura`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE `EstudianteEntity` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_perfil` INT NOT NULL,
    `id_representante` INT NOT NULL,
    `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`id_perfil`) REFERENCES `PerfilEstudiante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (`id_representante`) REFERENCES `Representante`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
    UNIQUE KEY `EstudianteEntity_id_perfil_key` (`id_perfil`),
    UNIQUE KEY `EstudianteEntity_id_representante_key` (`id_representante`)
);
