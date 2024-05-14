import random
import sys
import numpy 
from scipy.stats import entropy

class Generator:

    def __init__(self):
        self.liste = []
    


    #Générateur naif de floatant 

    def generator_naif_float(self,longueur):
        for i in range(longueur):
            self.liste.append(random.random())
        return self.liste

    #Générateur naif de nombre entier. Avec une borne élevé.
    #Voir doc du sys.maxsize 

    def generator_naif_int(self,longueur):
        for i in range(longueur):
            self.liste.append(random.randint(0,sys.maxsize))
        return self.liste
    
    #Générateur naif de nombre entier, avec doublons : 

    def generator_naif_int_doublons(self,longueur):
        for i in range(longueur):
            self.liste.append(random.randint(0,100))
        return self.liste
    
    #Générateur d'une liste ordonnée 

    def generator_ord_int(self,longueur):
        for i in range(longueur): 
            self.liste.append(i)       
        return self.liste
    
    #Générateur d'une liste de float ordonnée entre 0 et 1

    def generator_ord_float(self,longueur):
         self.liste = numpy.arange(0,1,1/longueur)
         return self.liste
    
    def get_liste_gen(self):
        return self.liste
    

    #Algo de mélange avec une borne
    # Soit les borne suivante 
    #  0 = toutes la liste.
    #  1 = Debut jusqu'aux milieux.
    #  2 = Milieux fin. 

    def fisher_yate_algo(self,borne):
        longueur = len(self.liste)
        millieux = longueur // 2 
        if (borne == 0) :
            for i in range(longueur-1,-1,-1):
                nb_all = random.randint(0,longueur-1)
                self.liste[i] , self.liste[nb_all] = self.liste[nb_all] ,self.liste[i]
            return 
        elif (borne == 1) : 
            for i in range(millieux,-1,-1):
                nb_all = random.randint(0, millieux)
                self.liste[i] , self.liste[nb_all] = self.liste[nb_all] ,self.liste[i]
            return self.liste      
        elif (borne == 2) :
            for i in range(longueur-1,millieux,-1):
                nb_all = random.randint(millieux,longueur-1)
                self.liste[i] , self.liste[nb_all] = self.liste[nb_all] ,self.liste[i]
            return self.liste
        else :
            return "mauvaise borne écrite : \n - 0 pour tout mélanger. \n - 1 pour mélanger uniquement le début de la liste \n - 2 pour mélanger uniquement la fin de la liste"
    
    def Shannon_value_base_liste(self):
        return entropy(self.liste , base=len(self.liste))
    
    def Shannon_value(self):
        return entropy(self.liste)


