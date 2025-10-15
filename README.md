<!doctype html> 
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
    <title>Steel Ball Run</title>
    <link href="main.css" rel="stylesheet" />
  </head>
  <body>

    <!--==============-->
    <!--ENCABEZADO-->
    <!--==============-->
    <header class="container-fluid bg-primary d-flex justify-content-center">
      <p class="text-light mb-0 p-2 fs-6">Bienvenidos al Steel Ball Run • Año 1890</p>
    </header>

    <!--==============-->
    <!--NAVEGACION-->
    <!--==============-->
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-3" id="menu">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <span class="text-primary fs-5 fw-bold">Steel Ball Run</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#intro">inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#personajes">Personajes</a></li>
            </li>
            <li class="nav-item">
              <li><a class="nav-link" href="#competidores">Competidores</a></li>
            </li>
            <li class="nav-item">
              <li><a class="nav-link" href="#seccion-contacto">Contáctanos</a></li>

            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="email" placeholder="Correo Electrónico" aria-label="Email"/>
            <button class="btn btn-primary" type="button">Suscríbete</button>
          </form>
        </div>
      </div>
    </nav>

    <!--==================-->
    <!--SLIDER DE IMAGENES-->
    <!--==================-->
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img src="./image/1.png" class="d-block w-100 img-fluid" alt="Jojo's">
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="./image/2.jpg" class="d-block w-100 img-fluid" alt="Johnny">
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="./image/3.webp" class="d-block w-100 img-fluid" alt="Sbr">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>

    <!--==================-->
    <!--INTRO DEL PROYECTO-->
    <!--==================-->
    <section class="w-50 mx-auto text-center pt-5" id="intro">
      <h1 class="p-3 fs-2 border-top border-3">
       La Carrera <span class="text-primary"> Steel Ball Run </span>
      </h1>
      <p class="p-3 fs-4">
        Una carrera de caballos a lo largo de Estados Unidos en 1890, donde jinetes de todo el mundo compiten
        no solo por la gloria y la fortuna, sino por descubrir el verdadero secreto que esconde este viaje.
      </p>
    </section>

    <!--=========-->
    <!--PERSONAJES-->
    <!--=========-->
    <section class="container-fluid" id="personajes">
      <div class="row w-75 mx-auto my-5 servicio-fila">
        
        <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
          <img src="./image/johnny.webp" alt="Johnny Joestar" height="300" width="400">
          <div>
            <h3 class="fs-5 mt-4 px-4 pb-1">Johnny Joestar</h3>
            <p class="px-4" style="text-align: justify;">
              Protagonista de la carrera. Un joven ex-jinete parapléjico que busca recuperar la movilidad de sus piernas
              mientras descubre el poder de los "Stand".
            </p>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
          <img src="./image/Gyro_Zeppelin.webp" alt="Gyro Zeppeli" height="300" width="400">
          <div>
            <h3 class="fs-5 mt-4 px-4 pb-1">Gyro Zeppeli</h3>
            <p class="px-4" style="text-align: justify;">
              Experto en el uso del Spin y mentor de Johnny. Participa en la carrera con un objetivo oculto 
              que trasciende la victoria y el dinero.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!--==============-->
<!-- LOS COMPETIDORES -->
<!--==============-->
<section id="competidores" class="py-5 bg-light">
  <div class="w-75 m-auto text-center">
    <h1 class="mb-4 fs-2">Competidores</h1>
    <p class="fs-5">
      Desde jinetes experimentados hasta aventureros sin experiencia, 
      el Steel Ball Run reúne a participantes de todo el mundo. 
      Cada uno con motivaciones distintas: gloria, dinero o el deseo de cambiar el destino.
    </p>
    <img class="img-fluid" src="image/competidores.webp" alt="Competidores">
  </div>
</section>
 

    <!--==============-->
    <!-- SECCIÓN MAPA DE RECORRIDO-->
    <!--==============-->
    <div id="local" class="border-top border-3">
      <div class="mapa"></div>
      <div>
        <div class="wrapper">
          <h2>Mapa del Steel Ball Run</h2>
          <h2 class="text-primary mb-4" id="typewriter" style="font-size: 20px;"></h2>
          <p class="fs-5 text-body">
            El recorrido atraviesa desiertos, montañas y llanuras en una carrera de 6000 km 
        desde San Diego hasta Nueva York. Cada tramo está lleno de desafíos, 
        estrategias y la ambición de alcanzar la gloria definitiva.
          </p>
          <section class="d-flex" id="numeros-local">
            <div>
              <p class="text-primary fs-5">600k km</p>
              <p>Distancia total</p>
            </div>
            <div>
              <p class="text-primary fs-5">3 meses</p>
              <p>Duración aproximada</p>
            </div>
            <div>
              <p class="text-primary fs-5">300</p>
              <p>Competidores</p> 
            </div>
          </section>
        </div>
      </div>
    </div>
  
 <!-- ============== -->
<!-- FORMULARIO -->
<!-- ============== -->
<section id="seccion-contacto" class="py-5">
  <div id="contenedor-formulario" class="container col-lg-3 col-md-5 col-sm-8 shadow p-3 rounded bg-light">
    
  
    <div class="text-center mb-3">
      <div>
        <img src="./image/inscripcion.png" alt="Contacto" class="img-fluid"></div>
      <h2 class="fw-bold fs-4">Únete al Steel Ball Run</h2>
      <p class="fs-6 text-muted">¿Quieres recibir más información sobre la carrera?</p>
    </div>
    
    <form action="">
      <div class="mb-2">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input type="email" class="form-control form-control-sm" id="email" placeholder="nombre@ejemplo.com" required>
      </div>
      
      <div class="mb-2">
        <label for="nombre" class="form-label">Nombre Completo</label>
        <input type="text" class="form-control form-control-sm" id="nombre" placeholder="Gyro Zeppeli" required>
      </div>
      
      <div class="mb-2">
        <label for="tel" class="form-label">Teléfono</label>
        <input type="tel" class="form-control form-control-sm" id="tel" placeholder="314 000 0000" required>
      </div>
      
      <div class="mb-3">
        <label for="mensaje" class="form-label">Mensaje</label>
        <textarea class="form-control form-control-sm" id="mensaje" rows="3" placeholder="Escribe tu mensaje..." required></textarea>
      </div>
      
      <div class="mb-3">
        <button type="submit" class="btn btn-primary btn-sm">Enviar Mensaje</button>
      </div>
    </form>
  </div>
</section>


    <!--===============-->
    <!--BORDE DE PAGINA-->
    <!--===============-->

    <section id="seccion-contacto" class="border-bottom border-secondary border-2">
      <div id="bg-contacto">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#000b76" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    
    <!--=============-->
    <!--PIE DE PAGINA-->
    <!--=============-->
 <footer class="w-100 d-flex align-items-center justify-content-center flex-wrap">
  <p class="fs-5 px-3 pt-3">Steel Ball Run. &copy; 2025</p>
  <div id="iconos">
    <a href="http://www.facebook.com/?locale=es_LA"><i class="bi bi-facebook"></i></a>
    <a href="http://x.com/?lang=es"><i class="bi bi-twitter-x"></i></a>
    <a href="http://www.instagram.com/"><i class="bi bi-instagram"></i></a>
  </div>
 </footer>

    <!--==================-->
    <!-- SCRIPTS -->
    <!--==================-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"  
            integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" 
            crossorigin="anonymous"></script>

    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
    <script src="main.js"></script>
  </body>
</html>
