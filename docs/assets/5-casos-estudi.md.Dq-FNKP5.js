import{_ as s,c as n,o as e,a4 as p}from"./chunks/framework.D8ILtLtz.js";const m=JSON.parse(`{"title":"5. Casos d'estudi i patrons comuns","description":"","frontmatter":{},"headers":[],"relativePath":"5-casos-estudi.md","filePath":"5-casos-estudi.md"}`),i={name:"5-casos-estudi.md"};function l(t,a,o,c,r,d){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="_5-casos-d-estudi-i-patrons-comuns" tabindex="-1">5. Casos d&#39;estudi i patrons comuns <a class="header-anchor" href="#_5-casos-d-estudi-i-patrons-comuns" aria-label="Permalink to &quot;5. Casos d&#39;estudi i patrons comuns&quot;">​</a></h1><p>En la programació, molts problemes comparteixen patrons similars. Reconèixer aquests patrons ens ajuda a resoldre problemes de manera més eficient i a aplicar solucions provades. En aquesta secció explorarem els patrons més comuns en el disseny d&#39;algoritmes.</p><h2 id="_5-1-patrons-fonamentals-en-algoritmes" tabindex="-1">5.1 Patrons fonamentals en algoritmes <a class="header-anchor" href="#_5-1-patrons-fonamentals-en-algoritmes" aria-label="Permalink to &quot;5.1 Patrons fonamentals en algoritmes&quot;">​</a></h2><h3 id="_5-1-1-patro-d-entrada-processament-sortida" tabindex="-1">5.1.1 Patró d&#39;entrada-processament-sortida <a class="header-anchor" href="#_5-1-1-patro-d-entrada-processament-sortida" aria-label="Permalink to &quot;5.1.1 Patró d&#39;entrada-processament-sortida&quot;">​</a></h3><p>Aquest és el patró més bàsic i es troba en gairebé tots els algoritmes.</p><h4 id="estructura-general" tabindex="-1"><strong>Estructura general:</strong> <a class="header-anchor" href="#estructura-general" aria-label="Permalink to &quot;**Estructura general:**&quot;">​</a></h4><ol><li><strong>Entrada</strong>: Obtenir dades de l&#39;usuari o del sistema</li><li><strong>Processament</strong>: Realitzar càlculs o transformacions</li><li><strong>Sortida</strong>: Mostrar o guardar els resultats</li></ol><blockquote><p><em><strong>Exemple: Calculadora de superfície</strong></em></p><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>INICI</span></span>
<span class="line"><span>  // ENTRADA</span></span>
<span class="line"><span>  ESCRIURE &quot;Introduïu la base:&quot;</span></span>
<span class="line"><span>  LLEGIR base</span></span>
<span class="line"><span>  ESCRIURE &quot;Introduïu l&#39;altura:&quot;</span></span>
<span class="line"><span>  LLEGIR altura</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // PROCESSAMENT</span></span>
<span class="line"><span>  superfície ← base * altura</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // SORTIDA</span></span>
<span class="line"><span>  ESCRIURE &quot;La superfície és: &quot; + superfície</span></span>
<span class="line"><span>FI</span></span></code></pre></div></blockquote><h4 id="aplicacions-del-patro" tabindex="-1"><strong>Aplicacions del patró:</strong> <a class="header-anchor" href="#aplicacions-del-patro" aria-label="Permalink to &quot;**Aplicacions del patró:**&quot;">​</a></h4><ul><li>Calculadores</li><li>Convertidors d&#39;unitats</li><li>Sistemes de puntuació</li><li>Processament de dades bàsic</li></ul><h3 id="_5-1-2-patro-de-validacio-d-entrada" tabindex="-1">5.1.2 Patró de validació d&#39;entrada <a class="header-anchor" href="#_5-1-2-patro-de-validacio-d-entrada" aria-label="Permalink to &quot;5.1.2 Patró de validació d&#39;entrada&quot;">​</a></h3><p>Assegura que les dades introduïdes per l&#39;usuari siguen vàlides abans de processar-les.</p><h4 id="estructura-general-1" tabindex="-1"><strong>Estructura general:</strong> <a class="header-anchor" href="#estructura-general-1" aria-label="Permalink to &quot;**Estructura general:**&quot;">​</a></h4><ol><li>Demanar entrada a l&#39;usuari</li><li>Verificar si l&#39;entrada és vàlida</li><li>Si no és vàlida, mostrar error i tornar al pas 1</li><li>Si és vàlida, continuar amb el processament</li></ol><blockquote><p><em><strong>Exemple: Validar edat</strong></em></p><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>INICI</span></span>
<span class="line"><span>  REPETIR</span></span>
<span class="line"><span>    ESCRIURE &quot;Introduïu la vostra edat (0-120):&quot;</span></span>
<span class="line"><span>    LLEGIR edat</span></span>
<span class="line"><span>    SI edat &lt; 0 O edat &gt; 120 LLAVORS</span></span>
<span class="line"><span>      ESCRIURE &quot;Error: L&#39;edat ha d&#39;estar entre 0 i 120&quot;</span></span>
<span class="line"><span>    FI SI</span></span>
<span class="line"><span>  MENTRE edat &lt; 0 O edat &gt; 120</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ESCRIURE &quot;Edat vàlida: &quot; + edat</span></span>
<span class="line"><span>FI</span></span></code></pre></div></blockquote><h3 id="_5-1-3-patro-de-cerca" tabindex="-1">5.1.3 Patró de cerca <a class="header-anchor" href="#_5-1-3-patro-de-cerca" aria-label="Permalink to &quot;5.1.3 Patró de cerca&quot;">​</a></h3><p>Buscar un element específic dins d&#39;un conjunt de dades.</p><h4 id="cerca-sequencial" tabindex="-1"><strong>Cerca seqüencial:</strong> <a class="header-anchor" href="#cerca-sequencial" aria-label="Permalink to &quot;**Cerca seqüencial:**&quot;">​</a></h4><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>INICI</span></span>
<span class="line"><span>  trobat ← FALS</span></span>
<span class="line"><span>  posició ← 0</span></span>
<span class="line"><span>  MENTRE posició &lt; tamany_llista I NO trobat</span></span>
<span class="line"><span>    SI llista[posició] = element_buscat LLAVORS</span></span>
<span class="line"><span>      trobat ← CERT</span></span>
<span class="line"><span>    SINÓ</span></span>
<span class="line"><span>      posició ← posició + 1</span></span>
<span class="line"><span>    FI SI</span></span>
<span class="line"><span>  FI MENTRE</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  SI trobat LLAVORS</span></span>
<span class="line"><span>    ESCRIURE &quot;Element trobat a la posició: &quot; + posició</span></span>
<span class="line"><span>  SINÓ</span></span>
<span class="line"><span>    ESCRIURE &quot;Element no trobat&quot;</span></span>
<span class="line"><span>  FI SI</span></span>
<span class="line"><span>FI</span></span></code></pre></div><h3 id="_5-1-4-patro-d-acumulacio" tabindex="-1">5.1.4 Patró d&#39;acumulació <a class="header-anchor" href="#_5-1-4-patro-d-acumulacio" aria-label="Permalink to &quot;5.1.4 Patró d&#39;acumulació&quot;">​</a></h3><p>Utilitzat per calcular sumes, mitjanes, o anar acumulant valors.</p><blockquote><p><em><strong>Exemple: Calcular mitjana de notes</strong></em></p><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>INICI</span></span>
<span class="line"><span>  suma ← 0</span></span>
<span class="line"><span>  comptador ← 0</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  REPETIR</span></span>
<span class="line"><span>    ESCRIURE &quot;Introduïu una nota (o -1 per acabar):&quot;</span></span>
<span class="line"><span>    LLEGIR nota</span></span>
<span class="line"><span>    SI nota != -1 LLAVORS</span></span>
<span class="line"><span>      suma ← suma + nota</span></span>
<span class="line"><span>      comptador ← comptador + 1</span></span>
<span class="line"><span>    FI SI</span></span>
<span class="line"><span>  MENTRE nota != -1</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  SI comptador &gt; 0 LLAVORS</span></span>
<span class="line"><span>    mitjana ← suma / comptador</span></span>
<span class="line"><span>    ESCRIURE &quot;La mitjana és: &quot; + mitjana</span></span>
<span class="line"><span>  SINÓ</span></span>
<span class="line"><span>    ESCRIURE &quot;No s&#39;han introduït notes&quot;</span></span>
<span class="line"><span>  FI SI</span></span>
<span class="line"><span>FI</span></span></code></pre></div></blockquote><h2 id="_5-2-casos-d-estudi-per-sectors" tabindex="-1">5.2 Casos d&#39;estudi per sectors <a class="header-anchor" href="#_5-2-casos-d-estudi-per-sectors" aria-label="Permalink to &quot;5.2 Casos d&#39;estudi per sectors&quot;">​</a></h2><h3 id="_5-2-1-sector-bancari" tabindex="-1">5.2.1 Sector bancari <a class="header-anchor" href="#_5-2-1-sector-bancari" aria-label="Permalink to &quot;5.2.1 Sector bancari&quot;">​</a></h3><h4 id="cas-sistema-de-validacio-de-targeta-de-credit" tabindex="-1"><strong>Cas: Sistema de validació de targeta de crèdit</strong> <a class="header-anchor" href="#cas-sistema-de-validacio-de-targeta-de-credit" aria-label="Permalink to &quot;**Cas: Sistema de validació de targeta de crèdit**&quot;">​</a></h4><p><strong>Problema</strong>: Verificar si un número de targeta de crèdit és vàlid utilitzant l&#39;algoritme de Luhn.</p><p><strong>Patrons utilitzats</strong>:</p><ul><li>Validació d&#39;entrada (número de 16 dígits)</li><li>Processament per dígits</li><li>Validació matemàtica</li></ul><blockquote><p><em><strong>Algoritme simplificat:</strong></em></p><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>INICI</span></span>
<span class="line"><span>  ESCRIURE &quot;Introduïu el número de targeta (16 dígits):&quot;</span></span>
<span class="line"><span>  LLEGIR numeroTargeta</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // Validar longitud</span></span>
<span class="line"><span>  SI longitud(numeroTargeta) != 16 LLAVORS</span></span>
<span class="line"><span>    ESCRIURE &quot;Error: Ha de tenir 16 dígits&quot;</span></span>
<span class="line"><span>  SINÓ</span></span>
<span class="line"><span>    // Aplicar algoritme de Luhn (simplificat)</span></span>
<span class="line"><span>    suma ← 0</span></span>
<span class="line"><span>    PER A i DE 1 A 16</span></span>
<span class="line"><span>      dígit ← numeroTargeta[i]</span></span>
<span class="line"><span>      SI i és parell LLAVORS</span></span>
<span class="line"><span>        dígit ← dígit * 2</span></span>
<span class="line"><span>        SI dígit &gt; 9 LLAVORS</span></span>
<span class="line"><span>          dígit ← dígit - 9</span></span>
<span class="line"><span>        FI SI</span></span>
<span class="line"><span>      FI SI</span></span>
<span class="line"><span>      suma ← suma + dígit</span></span>
<span class="line"><span>    FI PER A</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    SI suma % 10 = 0 LLAVORS</span></span>
<span class="line"><span>      ESCRIURE &quot;Targeta vàlida&quot;</span></span>
<span class="line"><span>    SINÓ</span></span>
<span class="line"><span>      ESCRIURE &quot;Targeta no vàlida&quot;</span></span>
<span class="line"><span>    FI SI</span></span>
<span class="line"><span>  FI SI</span></span>
<span class="line"><span>FI</span></span></code></pre></div></blockquote><h3 id="_5-2-2-sector-educatiu" tabindex="-1">5.2.2 Sector educatiu <a class="header-anchor" href="#_5-2-2-sector-educatiu" aria-label="Permalink to &quot;5.2.2 Sector educatiu&quot;">​</a></h3><h4 id="cas-sistema-de-qualificacions" tabindex="-1"><strong>Cas: Sistema de qualificacions</strong> <a class="header-anchor" href="#cas-sistema-de-qualificacions" aria-label="Permalink to &quot;**Cas: Sistema de qualificacions**&quot;">​</a></h4><p><strong>Problema</strong>: Calcular la nota final d&#39;un estudiant amb diferents pesos per a cada avaluació.</p><p><strong>Patrons utilitzats</strong>:</p><ul><li>Entrada múltiple de dades</li><li>Càlcul ponderat</li><li>Classificació per rangs</li></ul><blockquote><p><em><strong>Algoritme:</strong></em></p><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>INICI</span></span>
<span class="line"><span>  ESCRIURE &quot;Introduïu la nota dels exàmens (40%):&quot;</span></span>
<span class="line"><span>  LLEGIR notaExamens</span></span>
<span class="line"><span>  ESCRIURE &quot;Introduïu la nota de pràctiques (35%):&quot;</span></span>
<span class="line"><span>  LLEGIR notaPractiques</span></span>
<span class="line"><span>  ESCRIURE &quot;Introduïu la nota de participació (25%):&quot;</span></span>
<span class="line"><span>  LLEGIR notaParticipacio</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // Calcular nota final ponderada</span></span>
<span class="line"><span>  notaFinal ← (notaExamens * 0.4) + (notaPractiques * 0.35) + (notaParticipacio * 0.25)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // Determinar qualificació</span></span>
<span class="line"><span>  SI notaFinal &gt;= 9 LLAVORS</span></span>
<span class="line"><span>    qualificació ← &quot;Excel·lent&quot;</span></span>
<span class="line"><span>  SINÓ SI notaFinal &gt;= 7 LLAVORS</span></span>
<span class="line"><span>    qualificació ← &quot;Notable&quot;</span></span>
<span class="line"><span>  SINÓ SI notaFinal &gt;= 5 LLAVORS</span></span>
<span class="line"><span>    qualificació ← &quot;Aprovat&quot;</span></span>
<span class="line"><span>  SINÓ</span></span>
<span class="line"><span>    qualificació ← &quot;Suspès&quot;</span></span>
<span class="line"><span>  FI SI</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ESCRIURE &quot;Nota final: &quot; + notaFinal + &quot; (&quot; + qualificació + &quot;)&quot;</span></span>
<span class="line"><span>FI</span></span></code></pre></div></blockquote><h3 id="_5-2-3-sector-comerc-electronic" tabindex="-1">5.2.3 Sector comerç electrònic <a class="header-anchor" href="#_5-2-3-sector-comerc-electronic" aria-label="Permalink to &quot;5.2.3 Sector comerç electrònic&quot;">​</a></h3><h4 id="cas-calculadora-de-descomptes" tabindex="-1"><strong>Cas: Calculadora de descomptes</strong> <a class="header-anchor" href="#cas-calculadora-de-descomptes" aria-label="Permalink to &quot;**Cas: Calculadora de descomptes**&quot;">​</a></h4><p><strong>Problema</strong>: Aplicar diferents tipus de descomptes segons el perfil del client i l&#39;import de la compra.</p><p><strong>Patrons utilitzats</strong>:</p><ul><li>Decisions múltiples</li><li>Càlculs condicionals</li><li>Validació de regles de negoci</li></ul><blockquote><p><em><strong>Algoritme:</strong></em></p><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>INICI</span></span>
<span class="line"><span>  ESCRIURE &quot;Introduïu l&#39;import de la compra:&quot;</span></span>
<span class="line"><span>  LLEGIR importCompra</span></span>
<span class="line"><span>  ESCRIURE &quot;Tipus de client (VIP/REGULAR/NOU):&quot;</span></span>
<span class="line"><span>  LLEGIR tipusClient</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  descompte ← 0</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // Aplicar descompte per tipus de client</span></span>
<span class="line"><span>  SI tipusClient = &quot;VIP&quot; LLAVORS</span></span>
<span class="line"><span>    descompte ← 0.15  // 15%</span></span>
<span class="line"><span>  SINÓ SI tipusClient = &quot;REGULAR&quot; LLAVORS</span></span>
<span class="line"><span>    descompte ← 0.10  // 10%</span></span>
<span class="line"><span>  SINÓ SI tipusClient = &quot;NOU&quot; LLAVORS</span></span>
<span class="line"><span>    descompte ← 0.05  // 5%</span></span>
<span class="line"><span>  FI SI</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // Descompte addicional per import alt</span></span>
<span class="line"><span>  SI importCompra &gt; 200 LLAVORS</span></span>
<span class="line"><span>    descompte ← descompte + 0.05  // 5% extra</span></span>
<span class="line"><span>  FI SI</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // Limitar descompte màxim</span></span>
<span class="line"><span>  SI descompte &gt; 0.25 LLAVORS</span></span>
<span class="line"><span>    descompte ← 0.25  // Màxim 25%</span></span>
<span class="line"><span>  FI SI</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  importDescompte ← importCompra * descompte</span></span>
<span class="line"><span>  importFinal ← importCompra - importDescompte</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ESCRIURE &quot;Import original: &quot; + importCompra + &quot;€&quot;</span></span>
<span class="line"><span>  ESCRIURE &quot;Descompte aplicat: &quot; + (descompte * 100) + &quot;%&quot;</span></span>
<span class="line"><span>  ESCRIURE &quot;Import del descompte: &quot; + importDescompte + &quot;€&quot;</span></span>
<span class="line"><span>  ESCRIURE &quot;Import final: &quot; + importFinal + &quot;€&quot;</span></span>
<span class="line"><span>FI</span></span></code></pre></div></blockquote><h2 id="_5-3-optimitzacio-de-patrons-comuns" tabindex="-1">5.3 Optimització de patrons comuns <a class="header-anchor" href="#_5-3-optimitzacio-de-patrons-comuns" aria-label="Permalink to &quot;5.3 Optimització de patrons comuns&quot;">​</a></h2><h3 id="_5-3-1-principis-d-optimitzacio" tabindex="-1">5.3.1 Principis d&#39;optimització <a class="header-anchor" href="#_5-3-1-principis-d-optimitzacio" aria-label="Permalink to &quot;5.3.1 Principis d&#39;optimització&quot;">​</a></h3><h4 id="evitar-calculs-redundants" tabindex="-1"><strong>Evitar càlculs redundants</strong> <a class="header-anchor" href="#evitar-calculs-redundants" aria-label="Permalink to &quot;**Evitar càlculs redundants**&quot;">​</a></h4><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// Dolent: Calcular el mateix valor múltiples vegades</span></span>
<span class="line"><span>SI (a + b) &gt; 10 I (a + b) &lt; 20 LLAVORS</span></span>
<span class="line"><span>  resultat ← (a + b) * 2</span></span>
<span class="line"><span>FI SI</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Bo: Calcular una vegada i reutilitzar</span></span>
<span class="line"><span>suma ← a + b</span></span>
<span class="line"><span>SI suma &gt; 10 I suma &lt; 20 LLAVORS</span></span>
<span class="line"><span>  resultat ← suma * 2</span></span>
<span class="line"><span>FI SI</span></span></code></pre></div><h4 id="usar-condicions-eficients" tabindex="-1"><strong>Usar condicions eficients</strong> <a class="header-anchor" href="#usar-condicions-eficients" aria-label="Permalink to &quot;**Usar condicions eficients**&quot;">​</a></h4><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// Dolent: Comprovar condicions costoses primer</span></span>
<span class="line"><span>SI operació_costosa() I variable_simple = 5 LLAVORS</span></span>
<span class="line"><span>  // codi</span></span>
<span class="line"><span>FI SI</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Bo: Comprovar condicions simples primer</span></span>
<span class="line"><span>SI variable_simple = 5 I operació_costosa() LLAVORS</span></span>
<span class="line"><span>  // codi</span></span>
<span class="line"><span>FI SI</span></span></code></pre></div><h3 id="_5-3-2-refactoritzacio-de-patrons" tabindex="-1">5.3.2 Refactorització de patrons <a class="header-anchor" href="#_5-3-2-refactoritzacio-de-patrons" aria-label="Permalink to &quot;5.3.2 Refactorització de patrons&quot;">​</a></h3><h4 id="abans-de-refactoritzar" tabindex="-1"><strong>Abans de refactoritzar:</strong> <a class="header-anchor" href="#abans-de-refactoritzar" aria-label="Permalink to &quot;**Abans de refactoritzar:**&quot;">​</a></h4><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>INICI</span></span>
<span class="line"><span>  ESCRIURE &quot;Nom:&quot;</span></span>
<span class="line"><span>  LLEGIR nom</span></span>
<span class="line"><span>  SI nom = &quot;&quot; LLAVORS</span></span>
<span class="line"><span>    ESCRIURE &quot;Error: Nom buit&quot;</span></span>
<span class="line"><span>    PARAR</span></span>
<span class="line"><span>  FI SI</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ESCRIURE &quot;Edat:&quot;</span></span>
<span class="line"><span>  LLEGIR edat</span></span>
<span class="line"><span>  SI edat &lt; 0 O edat &gt; 120 LLAVORS</span></span>
<span class="line"><span>    ESCRIURE &quot;Error: Edat no vàlida&quot;</span></span>
<span class="line"><span>    PARAR</span></span>
<span class="line"><span>  FI SI</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  ESCRIURE &quot;Email:&quot;</span></span>
<span class="line"><span>  LLEGIR email</span></span>
<span class="line"><span>  SI email no conté &quot;@&quot; LLAVORS</span></span>
<span class="line"><span>    ESCRIURE &quot;Error: Email no vàlid&quot;</span></span>
<span class="line"><span>    PARAR</span></span>
<span class="line"><span>  FI SI</span></span>
<span class="line"><span>FI</span></span></code></pre></div><h4 id="despres-de-refactoritzar" tabindex="-1"><strong>Després de refactoritzar:</strong> <a class="header-anchor" href="#despres-de-refactoritzar" aria-label="Permalink to &quot;**Després de refactoritzar:**&quot;">​</a></h4><div class="language-plaintext vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>INICI</span></span>
<span class="line"><span>  // Usar una funció de validació</span></span>
<span class="line"><span>  datosVàlids ← validarDatos()</span></span>
<span class="line"><span>  SI datosVàlids LLAVORS</span></span>
<span class="line"><span>    processarDatos()</span></span>
<span class="line"><span>  SINÓ</span></span>
<span class="line"><span>    ESCRIURE &quot;Dades no vàlides, torneu a intentar-ho&quot;</span></span>
<span class="line"><span>  FI SI</span></span>
<span class="line"><span>FI</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FUNCIÓ validarDatos()</span></span>
<span class="line"><span>  // Lògica de validació concentrada</span></span>
<span class="line"><span>  RETORNAR nom != &quot;&quot; I edat &gt;= 0 I edat &lt;= 120 I email conté &quot;@&quot;</span></span>
<span class="line"><span>FI FUNCIÓ</span></span></code></pre></div><h2 id="_5-4-exercicis-d-aplicacio-de-patrons" tabindex="-1">5.4 Exercicis d&#39;aplicació de patrons <a class="header-anchor" href="#_5-4-exercicis-d-aplicacio-de-patrons" aria-label="Permalink to &quot;5.4 Exercicis d&#39;aplicació de patrons&quot;">​</a></h2><h3 id="exercici-1-sistema-de-gestio-de-biblioteca" tabindex="-1">Exercici 1: Sistema de gestió de biblioteca <a class="header-anchor" href="#exercici-1-sistema-de-gestio-de-biblioteca" aria-label="Permalink to &quot;Exercici 1: Sistema de gestió de biblioteca&quot;">​</a></h3><p>Crear un algoritme que permeti:</p><ul><li>Registrar un llibre nou (validant ISBN)</li><li>Buscar un llibre per títol</li><li>Calcular multes per retard en devolució</li></ul><p><strong>Patrons a aplicar</strong>: Validació, cerca, càlculs condicionals</p><h3 id="exercici-2-calculadora-d-imc-amb-recomanacions" tabindex="-1">Exercici 2: Calculadora d&#39;IMC amb recomanacions <a class="header-anchor" href="#exercici-2-calculadora-d-imc-amb-recomanacions" aria-label="Permalink to &quot;Exercici 2: Calculadora d&#39;IMC amb recomanacions&quot;">​</a></h3><p>Crear un algoritme que:</p><ul><li>Calcule l&#39;Índex de Massa Corporal</li><li>Classifique el resultat (infrapes, normal, sobrepes, obesitat)</li><li>Done recomanacions personalitzades</li></ul><p><strong>Patrons a aplicar</strong>: Entrada-processament-sortida, classificació per rangs</p><h3 id="exercici-3-sistema-de-votacio" tabindex="-1">Exercici 3: Sistema de votació <a class="header-anchor" href="#exercici-3-sistema-de-votacio" aria-label="Permalink to &quot;Exercici 3: Sistema de votació&quot;">​</a></h3><p>Crear un algoritme que:</p><ul><li>Recopile vots de múltiples usuaris</li><li>Valide que cada persona només vote una vegada</li><li>Determine el guanyador</li></ul><p><strong>Patrons a aplicar</strong>: Acumulació, validació, processament de llistes</p><div class="tip custom-block"><p class="custom-block-title">Conceptes clau per recordar</p><ul><li>Els <strong>patrons comuns</strong> apareixen repetidament en diferents problemes</li><li>Reconèixer patrons <strong>estalvia temps</strong> i reduce errors</li><li>La <strong>validació d&#39;entrada</strong> és crucial en aplicacions reals</li><li>Els <strong>casos d&#39;estudi</strong> ens ajuden a entendre aplicacions pràctiques</li><li>La <strong>refactorització</strong> millora la qualitat i mantenibilitat del codi</li><li>Cada sector té els seus <strong>patrons específics</strong> però els fonamentals són universals</li><li>L&#39;<strong>optimització</strong> és important però no ha de comprometre la claredat del codi</li></ul></div>`,66)]))}const h=s(i,[["render",l]]);export{m as __pageData,h as default};
