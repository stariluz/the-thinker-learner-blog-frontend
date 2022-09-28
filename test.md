NeuMan: Neural Human Radiance Field from a Single Video
https://drive.google.com/uc?export=view&id=1_3SBqsM-KIF9ZyBOXRHtpjTClq4HqBBo

#### La inteligencia artificial que te puede renderizar en cualquier maniobra

En agosto de este año Apple publicó un paper en colaboración con la universidad británica de Columbia titulado "NeuMan: Neural Human Radiance Field from a Single Video", que traducido al español significa campo de radiación humana neuronal de un solo video.

> *"La representación fotorrealista y el reposo de los humanos son importantes para permitir experiencias de realidad aumentada"* mencionaron en el paper.

Para lograr lo que se muestra en los videos 

<div class="mb-4">
    <a href="https://mlr.cdn-apple.com/video/neuman_citron_54759e750c.mp4" target="_blank">
        <img src="https://drive.google.com/uc?export=view&id=1_3SBqsM-KIF9ZyBOXRHtpjTClq4HqBBo" height="300">
    </a>
    <a href="https://mlr.cdn-apple.com/video/neuman_lab_4bdb6c85f6.mp4" target="_blank">
        <img src="https://drive.google.com/uc?export=view&id=1GccOzrvT1wSvuhecKH9P2pkb-yOljFGs" height="300">
    </a>
</div>


El equipo involucrado en el desarrollo creo un marco de funcionalidad novedoso capaz de reconstruir a los seres humanos y las escenas que se puedan representar pero lograndolo con poses y vistas nuevas, distintas a la original, a partir de un solo video casual de la escena.

Dado un video capturado por una cámara en movimiento, se entrenaron dos modelos NeRF (Neural Radiance Field): uno para el humano, y otro para la escena

Segun mencionan en el paper original, para entrenar estos modelos, se basaron en los métodos existentes para estimar la geometría aproximada del ser humano y la escena. Esas estimaciones aproximadas de geometría les permitió crear un campo de deformación desde el espacio de observación hasta el espacio canónico independiente de la pose, que fue donde se entreno al modelo humano.

*"Nuestro método es capaz de aprender detalles específicos del sujeto, incluidas las arrugas de la ropa y los accesorios, a partir de solo un Videoclip de 10 segundos, y para proporcionar representaciones de alta calidad del ser humano en poses novedosas, desde vistas novedosas, junto con el fondo.* mencionan.

[[Referencia bibliográfica](https://machinelearning.apple.com/research/neural-human-radiance-field)]


