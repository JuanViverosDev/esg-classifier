import React from "react";
import imgAbout from "./assets/pexels-jan-kopřiva-3315512.jpg";
import imgESG from "./assets/Criterios-ESG.png";

const About = () => {
  return (
    <div className="py-40 mx-10">
      <p className="text-6xl font-extrabold text-center mb-20">
        ESG Classifier
      </p>
      <div className="grid grid-cols-2 gap-10">
        <img src={imgAbout} alt="about" className="w-full rounded-2xl" />
        <div className="">
          <p className="text-4xl font-extrabold mb-5">
            ¿Quienes somos nosotros?
          </p>
          <p className="text-justify">
            En nuestra plataforma, nos enfocamos en una idea central: promover
            la sostenibilidad a través de la clasificación y organización de
            productos en el mercado. Nos hemos propuesto crear una plataforma
            que priorice el impacto ecológico de los productos, basándonos en el
            informe ESG (ambiental, social y de gobierno corporativo) de las
            empresas comerciales. Nuestro objetivo es proporcionar a los
            consumidores y compradores información clara y confiable sobre el
            impacto ambiental y social de los productos que consideran adquirir.
            Creemos firmemente que tomar decisiones de compra informadas y
            sostenibles es fundamental para impulsar un cambio positivo en
            nuestro entorno. Nuestra plataforma actúa como un valioso recurso
            que facilita a los usuarios encontrar productos que cumplan con
            altos estándares de sostenibilidad. Evaluamos meticulosamente el
            desempeño de las empresas en términos de su gestión ambiental,
            prácticas laborales justas, impacto en las comunidades locales y la
            transparencia y ética empresarial en su gobierno corporativo. De
            esta manera, los consumidores pueden confiar en que los productos
            que encuentren en nuestra plataforma han sido evaluados
            cuidadosamente y cumplen con criterios estrictos de sostenibilidad.
            No solo beneficiamos a los consumidores, sino que también ayudamos a
            las empresas a demostrar su compromiso con la sostenibilidad. Al
            participar en nuestra plataforma, las empresas tienen la oportunidad
            de mejorar su reputación, mostrar su responsabilidad ambiental y
            social, y conectarse con un público que valora la sostenibilidad.
            Además, nuestros datos y clasificaciones pueden ser utilizados por
            inversores y analistas financieros para evaluar el desempeño y la
            sostenibilidad a largo plazo de las empresas, lo que promueve la
            toma de decisiones de inversión más responsables y conscientes.
            Estamos entusiasmados por el potencial que nuestra plataforma
            tecnológica tiene para crear un cambio significativo en la forma en
            que consumimos y compramos productos. Invitamos a todos a unirse a
            nosotros en este viaje hacia un futuro más sostenible, donde
            nuestras decisiones de compra tienen un impacto positivo en el medio
            ambiente y la sociedad. ¡Gracias por visitarnos y ser parte de
            nuestra comunidad comprometida con la sostenibilidad!
          </p>
        </div>
      </div>
      <div className="mt-20">
        <div>
          <p className="text-4xl font-extrabold mb-5 text-center">
            La importancia de los puntajes ESG en el desarrollo sostenible
          </p>
          <p className="text-justify">
            En la actualidad, cada vez más personas se preocupan por el impacto
            que sus decisiones de consumo tienen en el medio ambiente y la
            sociedad. La sostenibilidad se ha convertido en un tema clave en
            todas las áreas de la vida, incluyendo la compra de productos.
            Afortunadamente, contar con información sobre el puntaje ESG
            (ambiental, social y de gobierno corporativo) puede ser una
            herramienta valiosa para evaluar la sostenibilidad de un producto
            antes de comprarlo. El puntaje ESG es una métrica que evalúa el
            desempeño de una empresa en tres áreas fundamentales. La primera es
            el componente ambiental, que analiza cómo una empresa gestiona sus
            impactos ambientales, como las emisiones de carbono, el uso de
            recursos naturales, la gestión de residuos y la conservación de la
            biodiversidad. La segunda área es la social, que examina las
            prácticas laborales, los derechos humanos, la diversidad y la
            inclusión, la seguridad de los productos y el impacto en las
            comunidades locales. Por último, el gobierno corporativo se enfoca
            en la estructura de gobierno de la empresa, la transparencia, la
            ética empresarial y la lucha contra la corrupción. Conocer el
            puntaje ESG de un producto antes de comprarlo puede marcar una gran
            diferencia en términos de sostenibilidad. Aquí están algunas razones
            por las cuales es importante:
          </p>
          <p className="mt-5 text-justify">
            <span className="font-bold">Transparencia y responsabilidad:</span>{" "}
            El puntaje ESG proporciona información transparente sobre el
            desempeño de una empresa en aspectos clave relacionados con la
            sostenibilidad. Permite evaluar si la empresa está tomando medidas
            responsables para minimizar su impacto ambiental y social, y si está
            cumpliendo con altos estándares de gobierno corporativo. Al tomar
            decisiones de compra informadas, los consumidores pueden apoyar a
            las empresas que se comprometen con la sostenibilidad y fomentar un
            cambio positivo en la industria. <br />
            <span className="font-bold">
              Influencia en las prácticas empresariales:
            </span>{" "}
            Cuando los consumidores valoran y eligen productos con altos
            puntajes ESG, envían una señal clara a las empresas de que la
            sostenibilidad es importante para ellos. Esto puede incentivar a las
            empresas a adoptar prácticas más sostenibles, mejorar su desempeño
            en aspectos ESG y reducir su huella ambiental y social. En última
            instancia, al favorecer productos con altos puntajes ESG, los
            consumidores pueden impulsar una transformación hacia una economía
            más sostenible y responsable.
            <br />
            <span className="font-bold">
              Protección del medio ambiente y la sociedad:
            </span>{" "}
            Comprar productos con un buen puntaje ESG contribuye directamente a
            la protección del medio ambiente y el bienestar de la sociedad. Al
            elegir productos que minimizan su impacto ambiental, como aquellos
            con menor huella de carbono o fabricados con materiales reciclados,
            se promueve la conservación de los recursos naturales y la reducción
            de las emisiones de gases de efecto invernadero. Además, al
            favorecer empresas socialmente responsables, se apoya la promoción
            de buenas condiciones laborales, la igualdad de género, la
            diversidad y la inclusión, y se fomenta un impacto positivo en las
            comunidades locales.
          </p>
          <div className="grid grid-cols-2 mt-10">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ssY-e8qaAR4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <img src={imgESG} alt="esg" className="w-full rounded-2xl mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
