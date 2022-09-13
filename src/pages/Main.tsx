import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import Items from '../components/Items';

function Main() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Main</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Main</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol size="6">
              <IonItem>
                <IonLabel position="floating">Etiqueta1</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
            <IonCol size="6">
              <IonItem>
                <IonLabel position="floating">Etiqueta2</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonButton expand="block" color="primary">
                Buscar
              </IonButton>
            </IonCol>
            <IonItemDivider>Lista</IonItemDivider>
          </IonRow>
        </IonGrid>
        <Items/>
      </IonContent>
    </IonPage>
  );
}

export default Main