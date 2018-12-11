#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: Profil
#------------------------------------------------------------

CREATE TABLE Profil(
        id       Int  Auto_increment  NOT NULL ,
        pseudo   Varchar (50) NOT NULL ,
        civilite Varchar (50) NOT NULL ,
        mail     Varchar (50) NOT NULL
	,CONSTRAINT Profil_PK PRIMARY KEY (id)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: commentaires
#------------------------------------------------------------

CREATE TABLE commentaires(
        id        Int  Auto_increment  NOT NULL ,
        comments  Varchar (50) NOT NULL ,
        id_Profil Int NOT NULL
	,CONSTRAINT commentaires_PK PRIMARY KEY (id)

	,CONSTRAINT commentaires_Profil_FK FOREIGN KEY (id_Profil) REFERENCES Profil(id)
)ENGINE=InnoDB;

