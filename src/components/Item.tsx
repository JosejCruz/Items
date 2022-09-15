import { IonButton, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuToggle, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import './style.css'

function Item() {
  return (
    <>
      <IonMenu className='Menu' side="end" menuId="first" contentId="main">
        <IonHeader >
          <IonToolbar color={'medium'}>
            <IonTitle>Ejemplo Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
}

export default Item
