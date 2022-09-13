import { IonButton, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuToggle, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

function Item() {
  return (
    <>
    <IonMenu side="end" menuId="first" contentId="main">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Example Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonPage id="main">
      <IonContent>
        <IonMenuToggle>
          <IonButton>Toggle Menu</IonButton>
        </IonMenuToggle>
      </IonContent>
    </IonPage>
  </>
  )
}

export default Item
