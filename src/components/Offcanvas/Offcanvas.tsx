import { IonContent, IonHeader, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

function Offcanvas() {
  return (
    <>
      <div className="wrapper">
        <IonHeader>
          <IonToolbar color={"medium"}>
            <IonTitle>Ejemplo Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonContent>
      </div>
    </>
  );
}

export default Offcanvas