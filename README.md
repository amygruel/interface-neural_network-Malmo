# Développement d'un réseau neuronal adapté à la réalisation d'une tâche de survie

Projet de 6 mois (mars à août 2020) en Python 3 - supervisé par Dr André Garenne, au sein de l'équipe Mnémosyne (INRIA Bordeaux)    
Implémentation du réseau de neurones développé par Ardin et al. (*PLOS Computational Biology*, 2016) à l'aide de la bibliothèque **BindsNET**  
Implémentation de l'interface sensori-motrice et du monde virtuel avec la plateforme **Malmo**  

Pour exécuter le projet sur Windows 10, ouvrir deux terminaux de commande : 
* dans le premier terminal, se placer dans le répertoire Malmo\Minecraft puis  
``launchClient.bat``
* dans le second terminal, se placer dans le répertoire GitHub puis  
``python AntSimulation.py``

## 1. Structure du projet

Le projet principal est implémenté au sein des quatre scripts suivants :
* ``AntWorld.py`` : contient les quatre classes permettant l'initialisation du monde virtuel, la navigation, la réception d'information sensorielle ainsi que l'implémentation de l'agent autonome (dirigé par le réseau de neurones). Il exploite des classes de la plateforme **Malmo**.
* ``ant_world.xml`` : contient le XML décrivant le monde virtuel implémenté dans **Malmo**.
* ``AntLearning.py`` : contient les trois classes décrivant le formalisme d'Izhikevich, le modèle synaptique et la règle d'apprentissage à trois facteurs. Il exploite les classes de la bibliothèque **BindsNET**.
* ``AntSimulation.py`` : appelle les classes des deux scripts précédents et les met en interaction selon un protocole de simulation sensori-motrice.

Les deux fichiers ``MalmoPython.lib`` et ``MalmoPython.pyd`` permettent l'import de la bibliothèque **MalmoPython** donc l'exploitation de la plateforme virtuelle **Malmo**. Ces fichiers doivent impérativement être présents dans le même répertoire que les quatre dossiers ci-dessus afin que l'import soit réussi et la simulation se lance.

Les protocoles mis en place afin d'étudier l'apprentissage du réseau sur images statiques sont :
* ``reaction2figure.py`` : permet de comparer les réactions du réseau lorsqu'il est présenté à une même image avant, pendant et après apprentissage. 
* ``LM_model.py`` : permet de tester l'aptitude du réseau à reconnaître l'image qu'il a appris parmis trois qui lui sont proposées.  
Le dossier ``views`` contient le fichier texte correspondant aux images données en entrée à ces deux protocoles. 

Le script JavaScript ``ant_view.js`` est un plugin du logiciel **ImageJ**, permettant de visualiser une vue de l'agent après traitement de l'image (noir et blanc, redimension, négatif, égalisation de l'histogramme et normalisation). 

Le script ``interface.py`` correspond à l'interface implémentée lors d'un premier stage sous la supervision d'André Garenne en juin 2019. 

Le script ``nodes_bindsnet.py`` permet de comparer l'évolution d'un neurone de type LIF, CurrentLIF, AdaptiveLIF ou Izhikevich pendant 50 ms selon l'implémentation **BindsNET**.

## 2. Installation de BindsNET

### a) Sur Windows 10

La bibliothèque BidnsNET demande que Python soit sous la version 3.6. Les commandes à effectuer sont les suivantes : 
``git clone https://github.com/Hananel-Hazan/bindsnet.git``
``cd bindsnet/``
``pip install -e .``

Afin de tester l'installation, il suffit d"exécuter la commande ``python -m pytest test``. Si tout se déroule correctement, 5 figures MatPlotLib apparaissent, résultats de l'exécution des divers fichiers tests implémentés dans le répertoire BindsNET.

Des informations complémentaires sont présentées sur le site : https://bindsnet-docs.readthedocs.io/index.html

## 3. Installation de Malmo

### a) Installation de Malmo sur Windows 10

Les étapes nécessaires à l’installation du logiciel Malmo à partir de la version *pre-built* sur un environnement Windows 10 professionnel sont présentées ci-dessous. 

Il faut d’abord s’assurer de la présence sur la machine de : 
* Python 3.6 
* le logiciel **Java JDK 8**
* les fonctionnalités gym, lxml, numpy, pillow et future, installables à l’aide de la commande ``pip3 install gym lxml numpy pillow future``. 

Afin que Malmo fonctionne, il est possible que la réinstallation de Java OpenJDK 8 sur la machine soit nécessaire. Pour cela, une version adaptée aux paramètres de la machine est téléchargeable à partir du site *JavaDownloads*. Une fois la version téléchargée, il faut s'assurer que la variable d'environnement **JAVA\_HOME** pointe bien vers cette version et non l'ancienne.
Une fois ces étapes préliminaires accomplies, l’installation de Malmo se déroule ainsi : 
1. Il faut d’abord télécharger la version la plus récente (pour Windows et Python 3.6) du *pre-built*, sur ce lien : https://github.com/Microsoft/malmo/releases. 
2. Le ﬁchier .zip téléchargé doit être décompressé, puis renommé et déplacé à l'emplacement souhaité. 
3. La variable d'environnement **MALMO\_XSD\_PATH** doit être indiquée à la machine, c’est-à-dire le chemin d’accès menant au dossier "Schémas" contenu dans le dossier général "Malmo". Pour ce faire, il faut créer une nouvelle variable d'environnement système nommée "MALMO\_XSD\_PATH", à laquelle on attribue la valeur **C:\path\Malmo\Schemas** (en remplaçant path par le bon chemin d’accès vers le dossier "Malmo"). 

### b) Installation de Malmo sur Linux

Les étapes nécessaires à l’installation du logiciel Malmo à partir de la version *pre-built* sur un environnement Ubunutu 18 sont présentées ci-dessous. 

1. Il faut d’abord télécharger la version la plus récente (pour Ubuntu 18 et Python 3.6) du *pre-built*, sur ce lien : https://github.com/Microsoft/malmo/releases. 
2. Le ﬁchier .zip téléchargé doit être décompressé, puis renommé et déplacé à l'emplacement souhaité. 
3. Le logiciel **Java JDK 8** ansi que les fonctionnalités boost, ffmpeg, tkinter, imageTk doivent etre présents sur la machine. Pour s'assurer de cela, il suffit d'exécuter les commandes ``sudo apt-get install libboost-all-dev libpython3.5 openjdk-8-jdk ffmpeg python-tk python-imaging-tk`` puis ``sudo update-ca-certificates -f``
4. Il faut enfin indiquer à la machine la variable d'environnement **MALMO\_XSD\_PATH**, c’est-à-dire le chemin d’accès menant au dossier "Schémas" contenu dans le dossier général "Malmo". Pour ce faire, il suffit d'ouvrir le fichier **.bashrc** présent dans le répertoire HOME, puis ajouter en fin de ce fichier la ligne ``export MALMO_XSD_PATH=/home/path/Malmo/Schemas`` (en remplaçant "path" par le bon chemin d’accès vers le dossier "Malmo"). Afin d'enregistrer cette modification, exécutez enfin la commande ``source ~/.bashrc``.

Le *pre-built* ainsi que les fonctionnalités à télécharger peuvent varier selon le système d'exploitation Linux utilisé (cf https://github.com/microsoft/malmo/blob/master/doc/install_linux.md). 

### c) Exécution et tests de Malmo

Il est désormais possible de tester le bon fonctionnement de Malmo. Le github dédié à Malmo propose de lancer Minecraft en passant par le mod installé, puis de tester un exemple d’agent. Nous essayerons un agent Python car il a été décidé préalablement d’utiliser ce langage, mais des exemples d’agents codés en de nombreux langages diﬀérents (C++, C\#, Java, Python) sont fournis par Malmo. 

La commandes suivantes permettent de lancer Minecraft en utilisant le mod installé et en partant du dossier "Malmo" :  
``cd Minecraft/``  
``./launchClient.sh -port 10000``  
La dernière ligne affichée par la terminal indiquera "Building 95\%" : ne vous inquiétez pas et n’attendez pas 100%, tant que la fenêtre de jeu Minecraft est bien lancée. De plus, le Mod choisit le port 10000 par défaut, et navigue de port en port jusque 11000 aﬁn de trouver un port libre. 

Une fois la fenêtre Minecraft lancée, il faut ouvrir un nouveau terminal et entrer les commandes suivantes :  
``cd Python_Examples``  
``python3 run_mission.py``  
Une fois cet exemple réalisé, on peut suivre des tutoriels fournis par Malmo et expliqués sur le document suivant : https://github.com/Microsoft/malmo/blob/master/Malmo/samples/Python\_examples/Tutorial.pdf


## 4. Déroulement d'une simulation en boucle fermée

![AntSimulation](https://user-images.githubusercontent.com/43147713/91883190-60acd880-ec84-11ea-8029-ff76eb94eba6.png)

Algorigramme du script ``AntSimulation.py``, présentant le déroulé d'une mission de simulation du modèle neuronal de *landmark guidance* en milieu virtuel
