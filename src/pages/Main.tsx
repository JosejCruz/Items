import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import Items from '../components/Items';

function Main() {
  return (
    <IonPage>
      <IonContent>
      <IonGrid className='Nav'>
        <IonRow >
          <IonCol >
          <IonSearchbar color={'light'} animated placeholder='Buscar'></IonSearchbar>
          </IonCol>
        </IonRow>
      </IonGrid>
        <Items />
      </IonContent>
    </IonPage>
  );
}

export default Main