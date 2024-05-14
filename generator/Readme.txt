La classe Generator :

Le constructeur génere une liste vide.

Il y a 2 type de Générateur de liste : 

les ordonnée et les non ordonnée : 

    3 sous Générateur de liste non ordonnée : 
                -generator_naif_float(longueur) -> genere une liste de float  entre 0 et 1
                -generator_naif_int(longueur)   -> genere une liste d'entier de 0 à sys.maxsize ( soit 2^32 ou 2^64 en fonction du système)
                -generator_naif_int_doublons (longueur) -> genere une liste d'entier entre 0 et 100 (possibilité de doublons)

    2 Sous Générateur de liste ordonnée : 
                -generator_ord_float(longueur) -> génere une liste de float entre 0 et 1 de float trié 
                -generator_ord_int(longueur)  -> génere une liste d'entier entre 0 et la longueur de la liste trié.

Pour mélange les liste ordonnée on utilise un mélange fisher yate algo. /!\ Prend des Objets Générateur /!\
        Algo de mélange avec une borne
        Soit les bornes suivantes 
          0 = toutes la liste.
          1 = Debut jusqu'aux milieux.
          2 = Milieux fin. 

Il existe une fonction qui s'appelle Shannon_value. Qui prend utilise un generator.
Et qui retourne l'entropy de Shannon ( attention la base et peut être fausse).

Exemple d'utilisation : 

1er temps crée le générateur avec par Exemple : gen1 = Generator().

Ensuite généré une liste  avec par exemple aveec gen1.generator_naif_float()

/!\ Attention ne pas faire gen1 = Generator().generator_naif_float() car le type de gen1 sera une liste et non un Generator. /!\

Pour les utilisations de générateur ordonée voici un exemple :

          - gen2 = Generator()
          - gen2.generator_ord_int(8)
          - gen2.fisher_yate_algo(0)


