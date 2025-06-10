# 5. Casos d'estudi i patrons comuns

En la programació, molts problemes comparteixen patrons similars. Reconèixer aquests patrons ens ajuda a resoldre problemes de manera més eficient i a aplicar solucions provades. En aquesta secció explorarem els patrons més comuns en el disseny d'algoritmes.

## 5.1 Patrons fonamentals en algoritmes

### 5.1.1 Patró d'entrada-processament-sortida

Aquest és el patró més bàsic i es troba en gairebé tots els algoritmes.

#### **Estructura general:**
1. **Entrada**: Obtenir dades de l'usuari o del sistema
2. **Processament**: Realitzar càlculs o transformacions
3. **Sortida**: Mostrar o guardar els resultats

> ***Exemple: Calculadora de superfície***
>
> ```plaintext
> INICI
>   // ENTRADA
>   ESCRIURE "Introduïu la base:"
>   LLEGIR base
>   ESCRIURE "Introduïu l'altura:"
>   LLEGIR altura
>   
>   // PROCESSAMENT
>   superfície ← base * altura
>   
>   // SORTIDA
>   ESCRIURE "La superfície és: " + superfície
> FI
> ```

#### **Aplicacions del patró:**
- Calculadores
- Convertidors d'unitats
- Sistemes de puntuació
- Processament de dades bàsic

### 5.1.2 Patró de validació d'entrada

Assegura que les dades introduïdes per l'usuari siguen vàlides abans de processar-les.

#### **Estructura general:**
1. Demanar entrada a l'usuari
2. Verificar si l'entrada és vàlida
3. Si no és vàlida, mostrar error i tornar al pas 1
4. Si és vàlida, continuar amb el processament

> ***Exemple: Validar edat***
>
> ```plaintext
> INICI
>   REPETIR
>     ESCRIURE "Introduïu la vostra edat (0-120):"
>     LLEGIR edat
>     SI edat < 0 O edat > 120 LLAVORS
>       ESCRIURE "Error: L'edat ha d'estar entre 0 i 120"
>     FI SI
>   MENTRE edat < 0 O edat > 120
>   
>   ESCRIURE "Edat vàlida: " + edat
> FI
> ```

### 5.1.3 Patró de cerca

Buscar un element específic dins d'un conjunt de dades.

#### **Cerca seqüencial:**
```plaintext
INICI
  trobat ← FALS
  posició ← 0
  MENTRE posició < tamany_llista I NO trobat
    SI llista[posició] = element_buscat LLAVORS
      trobat ← CERT
    SINÓ
      posició ← posició + 1
    FI SI
  FI MENTRE
  
  SI trobat LLAVORS
    ESCRIURE "Element trobat a la posició: " + posició
  SINÓ
    ESCRIURE "Element no trobat"
  FI SI
FI
```

### 5.1.4 Patró d'acumulació

Utilitzat per calcular sumes, mitjanes, o anar acumulant valors.

> ***Exemple: Calcular mitjana de notes***
>
> ```plaintext
> INICI
>   suma ← 0
>   comptador ← 0
>   
>   REPETIR
>     ESCRIURE "Introduïu una nota (o -1 per acabar):"
>     LLEGIR nota
>     SI nota != -1 LLAVORS
>       suma ← suma + nota
>       comptador ← comptador + 1
>     FI SI
>   MENTRE nota != -1
>   
>   SI comptador > 0 LLAVORS
>     mitjana ← suma / comptador
>     ESCRIURE "La mitjana és: " + mitjana
>   SINÓ
>     ESCRIURE "No s'han introduït notes"
>   FI SI
> FI
> ```

## 5.2 Casos d'estudi per sectors

### 5.2.1 Sector bancari

#### **Cas: Sistema de validació de targeta de crèdit**

**Problema**: Verificar si un número de targeta de crèdit és vàlid utilitzant l'algoritme de Luhn.

**Patrons utilitzats**:
- Validació d'entrada (número de 16 dígits)
- Processament per dígits
- Validació matemàtica

> ***Algoritme simplificat:***
>
> ```plaintext
> INICI
>   ESCRIURE "Introduïu el número de targeta (16 dígits):"
>   LLEGIR numeroTargeta
>   
>   // Validar longitud
>   SI longitud(numeroTargeta) != 16 LLAVORS
>     ESCRIURE "Error: Ha de tenir 16 dígits"
>   SINÓ
>     // Aplicar algoritme de Luhn (simplificat)
>     suma ← 0
>     PER A i DE 1 A 16
>       dígit ← numeroTargeta[i]
>       SI i és parell LLAVORS
>         dígit ← dígit * 2
>         SI dígit > 9 LLAVORS
>           dígit ← dígit - 9
>         FI SI
>       FI SI
>       suma ← suma + dígit
>     FI PER A
>     
>     SI suma % 10 = 0 LLAVORS
>       ESCRIURE "Targeta vàlida"
>     SINÓ
>       ESCRIURE "Targeta no vàlida"
>     FI SI
>   FI SI
> FI
> ```

### 5.2.2 Sector educatiu

#### **Cas: Sistema de qualificacions**

**Problema**: Calcular la nota final d'un estudiant amb diferents pesos per a cada avaluació.

**Patrons utilitzats**:
- Entrada múltiple de dades
- Càlcul ponderat
- Classificació per rangs

> ***Algoritme:***
>
> ```plaintext
> INICI
>   ESCRIURE "Introduïu la nota dels exàmens (40%):"
>   LLEGIR notaExamens
>   ESCRIURE "Introduïu la nota de pràctiques (35%):"
>   LLEGIR notaPractiques
>   ESCRIURE "Introduïu la nota de participació (25%):"
>   LLEGIR notaParticipacio
>   
>   // Calcular nota final ponderada
>   notaFinal ← (notaExamens * 0.4) + (notaPractiques * 0.35) + (notaParticipacio * 0.25)
>   
>   // Determinar qualificació
>   SI notaFinal >= 9 LLAVORS
>     qualificació ← "Excel·lent"
>   SINÓ SI notaFinal >= 7 LLAVORS
>     qualificació ← "Notable"
>   SINÓ SI notaFinal >= 5 LLAVORS
>     qualificació ← "Aprovat"
>   SINÓ
>     qualificació ← "Suspès"
>   FI SI
>   
>   ESCRIURE "Nota final: " + notaFinal + " (" + qualificació + ")"
> FI
> ```

### 5.2.3 Sector comerç electrònic

#### **Cas: Calculadora de descomptes**

**Problema**: Aplicar diferents tipus de descomptes segons el perfil del client i l'import de la compra.

**Patrons utilitzats**:
- Decisions múltiples
- Càlculs condicionals
- Validació de regles de negoci

> ***Algoritme:***
>
> ```plaintext
> INICI
>   ESCRIURE "Introduïu l'import de la compra:"
>   LLEGIR importCompra
>   ESCRIURE "Tipus de client (VIP/REGULAR/NOU):"
>   LLEGIR tipusClient
>   
>   descompte ← 0
>   
>   // Aplicar descompte per tipus de client
>   SI tipusClient = "VIP" LLAVORS
>     descompte ← 0.15  // 15%
>   SINÓ SI tipusClient = "REGULAR" LLAVORS
>     descompte ← 0.10  // 10%
>   SINÓ SI tipusClient = "NOU" LLAVORS
>     descompte ← 0.05  // 5%
>   FI SI
>   
>   // Descompte addicional per import alt
>   SI importCompra > 200 LLAVORS
>     descompte ← descompte + 0.05  // 5% extra
>   FI SI
>   
>   // Limitar descompte màxim
>   SI descompte > 0.25 LLAVORS
>     descompte ← 0.25  // Màxim 25%
>   FI SI
>   
>   importDescompte ← importCompra * descompte
>   importFinal ← importCompra - importDescompte
>   
>   ESCRIURE "Import original: " + importCompra + "€"
>   ESCRIURE "Descompte aplicat: " + (descompte * 100) + "%"
>   ESCRIURE "Import del descompte: " + importDescompte + "€"
>   ESCRIURE "Import final: " + importFinal + "€"
> FI
> ```

## 5.3 Optimització de patrons comuns

### 5.3.1 Principis d'optimització

#### **Evitar càlculs redundants**
```plaintext
// Dolent: Calcular el mateix valor múltiples vegades
SI (a + b) > 10 I (a + b) < 20 LLAVORS
  resultat ← (a + b) * 2
FI SI

// Bo: Calcular una vegada i reutilitzar
suma ← a + b
SI suma > 10 I suma < 20 LLAVORS
  resultat ← suma * 2
FI SI
```

#### **Usar condicions eficients**
```plaintext
// Dolent: Comprovar condicions costoses primer
SI operació_costosa() I variable_simple = 5 LLAVORS
  // codi
FI SI

// Bo: Comprovar condicions simples primer
SI variable_simple = 5 I operació_costosa() LLAVORS
  // codi
FI SI
```

### 5.3.2 Refactorització de patrons

#### **Abans de refactoritzar:**
```plaintext
INICI
  ESCRIURE "Nom:"
  LLEGIR nom
  SI nom = "" LLAVORS
    ESCRIURE "Error: Nom buit"
    PARAR
  FI SI
  
  ESCRIURE "Edat:"
  LLEGIR edat
  SI edat < 0 O edat > 120 LLAVORS
    ESCRIURE "Error: Edat no vàlida"
    PARAR
  FI SI
  
  ESCRIURE "Email:"
  LLEGIR email
  SI email no conté "@" LLAVORS
    ESCRIURE "Error: Email no vàlid"
    PARAR
  FI SI
FI
```

#### **Després de refactoritzar:**
```plaintext
INICI
  // Usar una funció de validació
  datosVàlids ← validarDatos()
  SI datosVàlids LLAVORS
    processarDatos()
  SINÓ
    ESCRIURE "Dades no vàlides, torneu a intentar-ho"
  FI SI
FI

FUNCIÓ validarDatos()
  // Lògica de validació concentrada
  RETORNAR nom != "" I edat >= 0 I edat <= 120 I email conté "@"
FI FUNCIÓ
```

## 5.4 Exercicis d'aplicació de patrons

### Exercici 1: Sistema de gestió de biblioteca
Crear un algoritme que permeti:
- Registrar un llibre nou (validant ISBN)
- Buscar un llibre per títol
- Calcular multes per retard en devolució

**Patrons a aplicar**: Validació, cerca, càlculs condicionals

### Exercici 2: Calculadora d'IMC amb recomanacions
Crear un algoritme que:
- Calcule l'Índex de Massa Corporal
- Classifique el resultat (infrapes, normal, sobrepes, obesitat)
- Done recomanacions personalitzades

**Patrons a aplicar**: Entrada-processament-sortida, classificació per rangs

### Exercici 3: Sistema de votació
Crear un algoritme que:
- Recopile vots de múltiples usuaris
- Valide que cada persona només vote una vegada
- Determine el guanyador

**Patrons a aplicar**: Acumulació, validació, processament de llistes

::: tip Conceptes clau per recordar
- Els **patrons comuns** apareixen repetidament en diferents problemes
- Reconèixer patrons **estalvia temps** i reduce errors
- La **validació d'entrada** és crucial en aplicacions reals
- Els **casos d'estudi** ens ajuden a entendre aplicacions pràctiques
- La **refactorització** millora la qualitat i mantenibilitat del codi
- Cada sector té els seus **patrons específics** però els fonamentals són universals
- L'**optimització** és important però no ha de comprometre la claredat del codi
:::