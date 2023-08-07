import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';

import Layout from "../components/layout";
import theme from 'theme/app/themeStyles';
import SEO from "../components/seo";
import Navigation from 'sections/Navigation';
import Footer from 'sections/Footer-crypto';
import { GlobalStyle } from 'sections/app.style';
import Modal from '../reusecore/Modal/index';
import styled from "styled-components";
import SectionTitle from "../reusecore/SectionTitle";
import { Container } from "../reusecore/Layout";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";


const content = ` __PRÉAMBULE__

 

La société STE NOV DISTY offre la faculté aux entreprises adhérentes à ses services (ci-après le(s) « Adhérent(s) ») de prendre soin de leurs collaborateurs en leur donnant accès à une plateforme de conventions digitalisées permettant d’acquérir une multitude de produits à prix réduits, accessible depuis le lien suivant:  www.eprogram.store (ci-après le « Site »).

 

Les présentes conditions générales (ci-après dénommées les « CGU») régissent ainsi les relations commerciales entre la société STE NOV DISTY, société à responsabilité limitée au capital de 125 000 dhs immatriculée au registre de commerce de Casablanca .sous le numéro 555203 , ayant son siège social au 33 rue Najib Mahfoud Casablanca identifiant fisca18774736 numéro d’inscription à la taxe professionnelle 17191648 .numéro ICE 001586953000079 (ci-après dénommée « STE NOV DISTY») et toute personne déclarée par l’Adhérent comme étant l’un de ses salariés autorisé à effectuer un achat à titre non professionnel sur le Site  (ci-après dénommé le « Client »).

 

Toute commande passée sur le Site est subordonnée à l’acceptation inconditionnelle et irrévocable des CGU par le Client. STE NOV DISTY se réserve le droit de modifier à n’importe quel moment ces CGU. 

Les CGU applicables seront celles en vigueur à la date de passation de la commande sur le Site par le Client.

 

## Article 1 : Déclarations du Client

Le Client déclare :

être majeur et avoir la capacité de conclure le présent contrat,
procéder à des achats uniquement pour son usage personnel et non pas à des fins de revente,
être salarié de l’Adhérent à la date de la passation de la commande.
garantir que les informations communiquées à STE NOV DISTY sont exactes et actualisées.
 

## Article 2 : Création d’un compte Client

 

Pour accéder au Site, le Client devra cliquer sur un lien qui lui aura été adressé par l’Adhérent et sera invité à renseigner des identifiants d’accès pour permettre à STE NOV DISTY de s’assurer que l’utilisateur figure parmi les salariés autorisés de l’Adhérent.

 

En cas d’impossibilité d’accès au Site, le Client devra en informer STE NOV DISTY en adressant un courrier électronique à l’adresse suivante : contact@eprogram.store

 

La responsabilité de STE NOV DISTY ne saurait en aucun cas être engagée par quelque membre du personnel de l’Adhérent qui n’aurait pas reçu le lien d’accès au Site ou qui bien que faisant partie des effectifs de l’Adhérent n’aurait pas eu accès au Site du fait qu’il ne figure pas parmi les salariés autorisés par ce dernier à bénéficier des prestations de STE NOV DISTY .

 

Le Client complètera ensuite un formulaire en renseignant les informations suivantes : civilité, nom, prénom, adresse mail, adresse postale, numéro de téléphone  intitulé de poste et un numéro d’identification, le cas échéant.

 

Il sera ensuite invité à choisir un identifiant et un mot de passe (ci-après les « Identifiants ») qui  lui sont personnels et confidentiels et lui seront demandés lors de chacune de ses prochaines visites pour accéder à son espace personnel sur le Site. Le Client demeurera seul responsable de la garde et de l’utilisation de ses Identifiants qu’il s’engage à conserver secrets et à ne pas divulguer à quelque personne que ce soit.

 

En cas de perte ou de vol ou de détournement de ses Identifiants par un tiers, le Client s’engage à en avertir STE NOV DISTY, sans délai, par courrier électronique à l’adresse suivante : contact@eprogram.store

 

Toute modification de ses coordonnées devra être communiquée par le Client à STE NOV DISTY, soit par mail en utilisant l’adresse électronique suivante : contact@eprogram.store soit en actualisant ses coordonnées directement sur le la plateforme via le lien électronique suivant : https://eprogram.store/account/ et ce, préalablement toute commande de Produits. A défaut, ces modifications ne seront pas opposables à STE NOV DISTY. STE NOV DISTY ne pourra donc pas être tenue responsable de la non réception par le Client d’une commande, ou d’une erreur dans les données d’identification fournies par le Client.

 

## Article 3 : Produits 

Les Produits  proposés à la vente par STE NOV DISTY sont ceux visibles sur le Site au jour de sa consultation par le Client et/ou sur les catalogues webs remis par STE NOV DISTY à certains de ses Adhérents.

 

Le Client est invité à consulter la disponibilité des articles vendus mentionnée sur la page d’information de chaque Produit.

Les Produits proposés à la vente par STE NOV DISTY peuvent varier d’un Client à un autre, en raison de l’inéligibilité de certains Clients à certains Produits pour répondre aux  exigences de certains Adhérents et/ou de certains fournisseurs.

Le nombre maximal de Produits pouvant être acheté par Client est mentionné sur la page d’information de chaque Produit.


Les Produits sont proposés dans la limite des stocks disponibles chez le fournisseur ou chez STE NOV DISTY. La disponibilité des Produits est vérifiée par STE NOV DISTY au moment de la préparation de la commande.

En cas de commande d’un Produit qui s’avérerait indisponible après passation de la commande, STE NOV DISTY en avertira le Client par téléphone ou par courrier électronique dans les meilleurs délais et un Produit de substitution pourra  éventuellement lui être alors proposé, équivalent par sa qualité et son prix au Produit initialement commandé. S’il n’existe aucun Produit alternatif, ou si le Produit proposé en remplacement n’est pas accepté par le Client, STE NOV DISTY procèdera alors au remboursement des sommes versées (Prix du Produit indisponible et frais de livraison) par le Client dans les meilleurs délais et au plus tard dans les quinze (15) jours suivant le paiement des sommes qu’il a versées, sans être toutefois tenue à aucune indemnité d’annulation.

 

Chaque Produit proposé à la vente sur le Site est accompagné, dans sa fiche produit, d’un descriptif du produit rédigé à partir des informations fournies par le fabricant ou fournisseur et présentant de la façon la plus complète possible les caractéristiques essentielles du Produit au sens de l’article 3 de la Loi 31-08. 

 

Chaque Produit est également accompagné d’une ou plusieurs photographies, pour la plupart données par le fabricant ou fournisseur du produit, et dont la fonction est exclusivement illustrative et non contractuelle. Par conséquent, la différence entre les Produits et les  visuels de présentation ne peut engager la responsabilité de STE NOV DISTY , qui fournira cependant ses meilleurs efforts pour que la représentation des Produits soit la plus fidèle possible.  

 

 

## Article 4: Prix

Le prix des Produits ont été préalablement négociés par STE NOV DISTY auprès de ses fournisseurs afin d’obtenir des offres exclusives à des tarifs préférentiels, représentant en moyenne une réduction de Dix (10%) par rapport au prix de vente public desdits Produits communiqués par les representations locales des marques commercialisées sous l’intitulé “Prix Public Conseillé/” ou “Prix Public Reccomandé” , le tout sauf promotions exceptionnelles pouvant exister dans d’autres établissements au même moment.

 

Le Client règle l’ensemble des frais liés à sa commande directement à STE NOV DISTY .

 

Les prix affichés s’entendent en dirhams toutes taxes comprises, incluant la TVA et hors frais de livraison indiqués lors du passage de la commande qui restent à la charge du Client, sauf conditions particulières.  Ces derniers sont portés à la connaissance du Client sur l’écran récapitulatif avant validation définitive de la commande et le paiement.


Le taux de TVA applicable  est celui en vigueur au jour de l’enregistrement de la commande. Si le taux venait à être modifié, ces changements seront automatiquement répercutés sur le prix des Produits.

 

Chaque Produit proposé par STE NOV DISTY est soumis aux conditions générales d’utilisation du fournisseur du Produit en question qui sont consultables sur : https://www.eprogram.store/pages/warranty




## Article 5: Compte e-cadeau

Le Client dispose dans son espace personnel d’un compte e-cadeau pouvant être crédité par son l’Adhérent et qu’il pourra utiliser pour tous ses achats sur le Site (ci-après le « Compte e-cadeau»).

Les sommes mentionnées sur le compte e-cadeau correspondent ainsi à des bons d’achat payés par l’Entreprise Partenaire auprès de STE NOV DISTY pour le compte du Client afin que celui-ci puisse en bénéficier sur le Site dans les conditions ci-après.

 

Les sommes portées au crédit du compte e-cadeau ne sont pas transférables à un autre compte et ne peuvent ni être reprises ni remboursées. Elles sont utilisables uniquement sur le Site en déduction du prix des Produits sélectionnés par le Client et pour une durée de 12 mois à compter de la date de réception par le Client de la notification de crédit de son compte e-cadeau qui lui sera faite par STE NOV DISTY à son adresse électronique

 

En cas de retour d’un Produit acheté sur le Site en utilisant partiellement ou totalement le crédit du compte e-cadeau, le Client recevra un remboursement sur son compte e-cadeau qui sera recrédité du montant utilisé pour le paiement dudit Produit.

 

## Article 6 : Commande

6.1 Process de validation de commande

Le Client sélectionne les Produits qu’il désire acheter en cliquant sur l’onglet « □ Ajouter au panier ». Les Produits sélectionnés apparaissent automatiquement ensuite dans l’onglet « Panier ».


Le Client peut ainsi vérifier dans cet onglet les détails de sa commande et les ajuster. S’il désire poursuivre sa commande, il lui suffira ensuite de cliquer sur la case « valider le panier ».

 

Le Client sera ensuite invité à renseigner le mode de livraison qu’il souhaite qui peut être soit à l’adresse renseignée au moment de l’ouverture de son compte soit une adresse différente de son choix ou au point de relais le plus proche qui pourrait éventuellement lui être proposé fonction de sa localisation . L’adresse choisie devra impérativement figurer dans la zone de livraison possible du Produit, telle que mentionnée en dessous de la fiche produit.

 

Le Client devra impérativement renseigner l’identité de la personne autorisée à réceptionner la livraison qui peut être soit le Client lui-même ou un tiers autorisé, dont l’identité complète doit être mentionnée (nom, prénom, numéro de carte nationale d’identité).

 

Le Client devra ensuite confirmer son acceptation expresse et irrévocable des CGU et valider son paiement.

Avant de valider définitivement sa commande, il aura enfin la possibilité de vérifier les détails de sa commande afin de rectifier d’éventuelles erreurs.

Dès lors que le Client a actionné le dernier clic d’acceptation, la commande est considérée comme irrévocable.

 

Toutes les commandes sont payables intégralement en dirhams et à la commande exclusivement .Une commande est considérée comme valide et définitivement enregistrée si elle est intégralement payée : aucun Produit ne saurait être expédié si la commande n’a pas été réglée intégralement.

 

Le Client reçoit à la validation du paiement de la commande, un premier courrier électronique  récapitulant ses choix. Il recevra ensuite un second courrier électronique récapitulant les Produits expédiés et facturés au moment de l’expédition de la commande avec  la transmission d’un numéro de suivi de commande.

 

Le Client pourra également suivre le traitement de sa commande en consultant la rubrique « mes commandes » accessible depuis son tableau de bord.

 

Pour avoir plus d’informations sur le passage, le suivi ou l’exécution de sa commande, de questions sur les délais de livraison, les conditions d’exercice de son droit de rétractation ou toute autre question, le Client peut contacter STE NOV DISTY




6.2 Paiement

Le paiement des Produits doit être réalisé au moment de la passation de la commande en utilisant l’un des moyens suivants  :

paiement sécurisé en ligne par carte bancaire (Carte visa, mastercard ou e-carte bancaire marocaine),
chèque bancaire émis par une banque domiciliée au Maroc exclusivement et libellé à l’ordre de STE NOV DISTY ,
virement bancaire,
débit du compte e-cadeau, en cas de solde créditeur.
Les cartes bancaires et les chèques bancaires sont encaissés à la passation de la commande. Cette dernière n’est définitivement validée qu’après encaissement du prix total par STE NOV DISTY . En conséquence, toutes les Produits commandés demeurent la propriété de STE NOV DISTY, jusqu’au complet paiement du prix, le cas échéant augmenté des intérêts.

 

STE NOV DISTY garantit la sécurité du paiement par carte bancaire en utilisant le système du Centre Monétique Interbancaire (CMI).

Les données bancaires du Client seront retransmises à la banque désignée ci-dessus, avec sécurisation SSL via la plateforme CMI de sorte qu’à aucun moment elles ne transitent sur le système informatique de STE NOV DISTY.

Le paiement à la livraison lors de la réception de la commande est possible sur une sélection de Produits, sous réserve d’avoir expressément été autorisé par STE NOV DISTY.

 

Le Client a aussi la possibilité d’obtenir, pour un montant d’achat minimum de mille cinq cent (1.500,00) dhs TTC des facilités de paiement auprès de l’organisme de financement partenaire « Wafasalaf », sous réserve de l’acceptation du dossier de crédit par ce dernier, selon les modalités suivantes :

Documents à fournir :
Attestation de travail de moins de 3 mois,
Carte nationale d’identité,
3 dernières fiches de paie,
3 derniers relevés bancaires.
(ii) Transmission du dossier à Wafasalaf

STE NOV DISTY transmettra le dossier à Wafasalaf qui devrait examiner la demande et adresser sa réponse au Client dans un délai de 24 heures ouvrés à compter de la date de reception du dossier complet par la plateforme .

STE NOV DISTY se dégage de toute responsabilité par rapport à l’étude, le suivi et l’issue de la demande de crédit et aux délais de traitement de cette demande de financement qui relèvent de l’entière discrétion de Wafasalaf.

 

STE NOV DISTY se réserve le droit d’annuler ou de refuser toute commande d’un Client qui n’aurait pas honoré une commande antérieure. Les données enregistrées par STE NOV DISTY constituent la preuve de l’ensemble des transactions passées entre STE NOV DISTY et les Clients.

 

 

## Article 7 : Livraison des Produits 

 

Dès réception du paiement de l’intégralité du prix de la commande, STE NOV DISTY adresse au Client le Produit par courrier recommandé ou suivi ou par tout autre moyen permettant de suivre l’acheminement et la réception du Produit ou par le biais d’un transporteur en cas de Produit volumineux.

 

Le Produit est livré à l’adresse indiquée par le Client et exclusivement sur le territoire marocain. 

Toutefois, le Client reconnaît avoir été informé que dépendamment du Produit et de son fournisseur, certaines zones ne pourront être livrées. Seules les zones de livraison spécifiées en bas du produit pourront être livrées.

 

Le Client reconnaît que la prestation de STE NOV DISTY  pour l’acheminement de la commande s’arrête à la livraison à l’adresse indiquée dans sa commande. La livraison s’entend au pied de l’immeuble à l’adresse indiquée par le Client et en présence de celui-ci ou de toute personne habilitée à réceptionner la marchandise. Les livreurs ne sont pas tenus d’entrer dans le domicile du Client.  STE NOV DISTY  ne procèdera donc pas à la livraison des commandes qui doivent être livrées en étage.

 

Le Client est responsable de la fourniture de coordonnées claires et précises de livraison. A défaut STE NOV DISTY  ne pourrait être tenue responsable de retards ou d’absence éventuels de livraison due à l’inexactitude de ces renseignements. En cas de nouvelle livraison due à une erreur dans ces renseignements, les frais de réexpédition sont facturés au Client.

En cas d’absence du Client à son domicile lors de la livraison ou de la personne autorisée à réceptionner la commande, il incombe au Client de prévenir STE NOV DISTY  dans au minimum cinq (5) jours ouvrés avant la date de livraison convenue. A défaut, le surcoût lié aux présentations supplémentaires sera facturé par le Site au Client.

Les délais de livraison annoncés par STE NOV DISTY  constituent une obligation de moyen et non une obligation de résultat. STE NOV DISTY  ne saurait être tenue responsable ni des aléas de livraison de ses fournisseurs ou ceux des transporteurs.

 

## Article 8 : Retour des Produits – Echange-  Remboursement

 

Le Client peut retourner les Produits commandés en exerçant son droit de rétractation, ou en cas de constatation de la non-conformité ou d’un vice affectant les Produits commandés selon les modalités décrites ci-après. En l’absence de respect des procédures et délais mentionnés aux présentes, STE NOV DISTY  n’accèdera à aucune demande d’échange ou de remboursement émanant du Client.

 

En cas de retour anormal ou abusif ou renvoi du Produit sans numéro de retour, ce retour sera considéré comme non conforme et rejeté. 

Le Client est libre de souscrire ou non une assurance en cas de perte, de vol ou de destruction de son colis, mais STE NOV DISTY  ne prend pas en charge ces frais et ne saurait être tenue pour responsable de la non réception du colis retourné par le Client.




8.1 Conformité du Produit à la commande :

STE NOV DISTY  demande au Client de vérifier impérativement en présence du livreur la conformité de son produit.

Toute anomalie lors de la livraison devra être signalée, datée et signée sur le bordereau de livraison ainsi qu’à STE NOV DISTY  à l’adresse email suivante contact@eprogram.store et ce,dans un délai maximum de 2 jours qui suivent celui de la réception.

En cas de livraison non conforme à la commande du Client, ce dernier pourra par suite obtenir l’échange ou le remboursement du des produits à condition qu’ils soient retournés en l’état de livraison initial et selon les modalités de remboursement spécifiées par le Client sur le bon de retour parmi les modalités qui lui sont proposées.

 

8.2 Garantie légale des défauts de la chose vendue

Conformément à l’article 65 de la loi 31-08 relative à la protection du consommateur, le Client bénéficie de la garantie légale des défauts de la chose vendue prévues aux articles 549 à 575 du Dahir des Obligations et des Contrats, à l'exception du paragraphe 2° de l'article 571 du Dahir des Obligations et des Contrats. Toute action en justice découlant des défauts nécessitant la garantie ou du fait que l'objet vendu est dépourvu des qualités promises, doit être intentée dans l'année suivant la livraison, à peine de forclusion.

 

Si la mise en jeu de la garantie légale est applicable, le Client peut poursuivre la résolution de la vente et la restitution du prix en adressant un courrier recommandé avec accusé de réception à STE NOV DISTY  à l'adresse figurant en préambule des présentes CGU. S'il préfère conserver le(s) produit(s) concerné(s), il n'a droit à aucune diminution de prix.

 

En cas de résolution de la vente par le Client, ce dernier doit restituer le produit concerné, tel qu'il l'a reçu (neuf, complet, dans son état et emballage d'origine après réception avec ses accessoires et ce qui en faisait partie). Les frais de réexpédition, en cas de mise en œuvre de la garantie légale par le Client, sont à la charge de STE NOV DISTY . 

Le Client n'a droit à aucune restitution, ni diminution de prix, s'il ne peut restituer la chose dans les cas visés à l'article 562 du Dahir des Obligations et des Contrats.

8.3  Rétractation

Le Client dispose d’un délai de Sept (7) jours francs à compter de la date de livraison pour demander une annulation de sa commande conformément aux dispositions de l’article  de la loi 31-08 relative à la protection du consommateur. Cette faculté de rétractation ne peut en aucun cas être mise en œuvre dans les cas prévus à l’article 38 de la loi 31-08 relative à la protection du consommateur et notamment pour la fourniture de services nominatifs au nom du Client ou dont l’exécution a commencé avec l’accord du Client avant la fin du délai de sept (7) jours francs, de fourniture de biens confectionnés selon les spécifications du Client ou nettement personnalisés ou qui du fait de leur nature ne peuvent être réexpédiés ou sont susceptibles de se détériorer ou de se périmer rapidement, ou e si les produits livrés ont manifestement fait l’objet d’un usage ou si les prestations ont commencé à être exécutées,ou encore s’il s’agit de produits datés c’est à dire de produits comportant une date fixe d’utilisation tels que les produits de billetterie ou nuitée d’hôtels.

 

Le Client devra effectuer sa demande de rétraction par courrier postal au siège social de STE NOV DISTY  33 rue Najib Mahfoud, Casablanca en envoyant le formulaire type de rétractation disponible ici :……….

ou en envoyant un email comprenant les mêmes informations que le formulaire type de rétractation à l’adresse contact@eprogram.store

 

Lorsque le droit de rétractation est valablement exercé, STE NOV DISTY  remboursera le Client le montant total payé par le Client (y compris les frais de livraison )au plus tard dans les quinze (15) jours suivant la date à laquelle le droit a été exercé et selon les modalités de remboursement spécifiées par le Client sur le bon de retour parmi les modalités qui lui sont proposées.  

 

En cas de rétractation par le Client, celui-ci devra renvoyer ou rendre le bien à STE NOV DISTY   à l’adresse mentionnée sur le Site, au 33 rue Najib Mahfoud, Casablanca sans délai et, en tout état de cause, au plus tard sept (7) jours après la réception du bien concerné. Les retours de biens réexpédiés au-delà de ce délai ne seront pas acceptés. Le produit concerné devra être restitué tel qu’il l’a reçu (neuf, non utilisé, complet, en parfait état de revente et dans son emballage d’origine après réception avec ses accessoires et documentation  (manuels d’utilisation, garantie etc…..,et tout ce qui en faisait partie) sans avoir subi une quelconque dépréciation résultant de manipulations autres que celles nécessaires pour établir la nature, les caractéristiques et le bon fonctionnement de ce ou ces biens et être accompagné de l’original de la facture de vente, dont le Client conservera une copie.

 

Les frais directs de renvoi du bien  et les risques liés au retour des Produits seront assumés par le Client, conformément à l’article 36 de la Loi 31-08.

A défaut de retour dans le délai de 7 jours susmentionné, le Client sera considéré comme ayant renoncé à l’exercice de son droit de rétractation et forclos de tout droit à ce titre.





8.4 - Garantie conventionnelle

Certains Produits vendus sur le Site peuvent bénéficier d’une garantie conventionnelle fabricant dont la durée, la portée et les conditions seront mentionnées sur la page produit des articles concernés.

Toute garantie sera exclue en cas de défauts, détériorations résultant d’une négligence, d’évènements extérieurs, d’une mauvaise installation, ou d’une utilisation non conformes aux indications du fournisseur.

Dans le cas où le Client souhaiterait faire valoir la garantie conventionnelle, il serait invité à renseigner un formulaire sur le Site qui sera adressé au fabricant qui vérifiera si le Produit est couvert par la garantie conventionnelle, et exigera le cas échéant le retour du Produit, pour procéder à la réparation ou l’échange par un Produit identique ou équivalent, ou le remboursement.

Tous les frais de port du Produit, liés à un retour au titre d’une garantie conventionnelle seront à la charge exclusive du Client.




## Article 9: Limitation de responsabilité

En cas de dommage causé par un défaut de sécurité du produit, le Client doit rechercher la responsabilité du fabricant identifiable à partir des informations mentionnées sur l’emballage du produit.

 

STE NOV DISTY  ne sera pas responsable de la non-exécution totale ou partielle de ses obligations au titre du présent contrat, si cette non-exécution résulte, soit du Client, soit d’un tiers, soit d’un cas de force majeure telle que définie à l’article 269 du Dahir des Obligations et des Contrats.


La responsabilité de STE NOV DISTY  ne saurait également être engagée pour tous les inconvénients ou dommages inhérents à l’utilisation du réseau Internet, notamment une rupture du service, une intrusion extérieure ou la présence de virus informatiques.

## Article 10: Données personnelles

Pour en savoir plus sur les engagements de STE NOV DISTY  en matière de traitement et de protection des données à caractère personnel, le Client peut consulter la rubrique « Politique en matière de protection des données et de cookies ».

Les données recueillies sur le Site font l'objet d'un traitement par STE NOV DISTY  en tant que responsable de traitement, destiné notamment à :

l’enregistrement et la gestion du panier d’achat, des commandes et la fourniture des produits ou services commandés, 
la comptabilité pour  l’émission des factures  Client correspondantes, 
le traitement des demandes du Client afin de lui apporter une réponse adaptée et personnalisée,
le règlement des réclamations et des litiges ou réponse à des réquisitions judiciaires,
la gestion des commandes, paiements et retours/ échanges/ remboursements de produits/ services,
l’envoi de newsletters, messages informatifs, ou publicités ou offres ou promotions ciblées, actualités, 
l’analyse des performances du Site, établissement de statistiques, pour leur analyse en interne ou le partage avec les partenaires, fournisseurs ou prestataires.
 

Les données seront conservées le temps strictement nécessaire à la réalisation de ces finalités. Certaines données pourront être conservées, conformément à toute réglementation applicable (telle que celle portant sur les obligations comptables des commerçants) au-delà de la clôture du compte du Client, le cas échéant.

Les données pourront être transmises aux prestataires intervenant dans le cadre des prestations du Site (transporteurs, prestataires informatiques, etc.).

Conformément à la loi n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, le Client bénéficie d'un droit d'accès, de rectification des informations les concernant, ainsi que d'opposition pour des motifs légitimes à ce que les données fassent l'objet d'un traitement. Ces droits peuvent être exercés en s'adressant au service Clientèle de la Société aux coordonnées suivantes :

Adresse mail : conformité@eprogram.ma  Téléphone : +212  (0) 701-110990

Si le Client l’a préalablement accepté, il pourra recevoir des emails ou des SMS marketing de STE NOV DISTY  dont il pourra se désinscrire conformément aux instructions figurant dans lesdits emails ou SMS.





## Article 11 : Propriété Intellectuelle

L’intégralité de ce Site est protégée par les législations relatives à la propriété intellectuelle. Tous les droits de reproduction sont réservés.


L’ensemble des textes composant les pages de ce site ne peut, conformément aux dispositions du code de la propriété intellectuelle, faire l’objet d’une quelconque représentation ou reproduction, intégrale ou partielle, sur quelque support que ce soit, sans l’autorisation expresse et préalable de STE NOV DISTY . De même, les marques, noms commerciaux et logos figurant sur ce site sont déposés. Leur reproduction totale ou partielle, effectuée à partir des éléments du site est prohibée.

 

Le Client reconnait expressément que le Site, ses composants, options et fonctionnalités sont protégés par différents droits de propriété intellectuelle, comprenant des droits d’auteur (notamment sur les aspects visuels, graphiques ou littéraires du Site, ses photographies ou illustrations, son interface utilisateur, le ou les logiciel(s) sous-jacent(s) au Site, les critères d’organisation ou d’ordonnancement constitutifs d’une base de données), des droits sur les marques, des appellations et dénominations commerciales, nom de domaine ainsi qu’un savoir-faire, des méthodes et procédés constitutifs d’un travail créatif et résultant d’un investissement de la part de la Société.

Ces droits appartiennent exclusivement à STE NOV DISTY  (ou aux tiers intervenus dans la conception, la création et la mise en place du Site). Le Client n'acquiert aucun de ces droits et a comme unique faculté celle d'accéder au Site et de visualiser son contenu.

Par conséquent, le Client s’interdit de reproduire, prélever, extraire, partager, faire de l’ingénierie inversée, compiler, décompiler, communiquer ou exploiter d’une quelconque façon tout ou partie du Site.

Toute reproduction et toute diffusion de ces éléments, sans autorisation écrite préalable de l'éditeur, exposent les contrevenants à des poursuites judiciaires.

## Article 12 : Intégralité

Dans l’hypothèse où l’une des clauses du présent contrat serait nulle et non avenue par un changement de législation, de réglementation ou par une décision de justice, cela ne saurait affecter la validité et le respect des autres clauses présentes au sein des conditions générales de vente.

## Article 13: Droit applicable 

Les présentes conditions générales de vente sont soumises à la législation marocaine.




## Article 14 - Règlement des litiges

Les différends qui viendraient à se produire à propos de la validité, l'interprétation, l'exécution ou la cessation du présent contrat seront soumis à la compétence des tribunaux marocains, nonobstant pluralité de défendeurs et/ou appel en garantie, même pour les procédures d’urgence ou les procédures conservatoires en référé ou par requête.

 

Le tribunal compétent en cas de litige sera celui du lieu dont relève le domicile du Client ou son lieu de résidence ou la juridiction du lieu où s’est produit le fait ayant causé le préjudice au choix du Client.

 `



const Mentions = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <SEO title="Mentions Légales" />
                {modalOpen && <Modal open={modalOpen} setOpen={setModalOpen} />}
                <Navigation modalOpen={modalOpen} setModalOpen={setModalOpen} />
                <div style={{ minHeight: "100vh!important" ,padding: "150px 0 0 0", display: "flex", flexDirection: "column", justifyContent:"space-between"}}>
                    <Container>
                        <SectionTitle style={{ fontSize: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                            className="section-title"
                            leftAlign={true}
                            UniWidth="100%"
                        >
                            <div className="title-container">
                                <div className='blog-title-container'>
                                    <h2>
                                        <span>Conditions générales d'utilisation</span>
                                    </h2>
                                </div>
                                <div className="underline underline-left"></div>
                            </div>
                        </SectionTitle>
                        <ContentMarkdown><ReactMarkdown children={content} rehypePlugins={[rehypeRaw]} /></ContentMarkdown>
                    </Container>
                    <Footer style={{position: "absolue!important", bottom: "0!important", left: "0!important"}} />
                </div>
            </Layout>
        </ThemeProvider>
    )
}

const ContentMarkdown = styled.div`
padding-bottom: 80px;
font-size: 18px;
margin-top: 0px;
text-align: justify;
h2, h3 {
    margin-top: 20px;
    margin-bottom: 10px;
}
img {
    display: block;
    margin-inline: auto;
}
ul {
    marggin: 0;
    padding-inline-start : 30px!important;
}
@media only screen and (max-width: 500px) {
    font-size: 15px;
    line-height: 22px;
    ul {
        marggin: 0;
        padding-inline-start : 22px!important;
    }
    h1 {
        font-size: 1.6em;
    }
    h2 {
        font-size: 1.4em;
    }
    h3 {
        font-size: 1.2em;
    }

}
`

export default Mentions;