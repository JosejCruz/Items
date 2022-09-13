import { IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRadio, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react'
import React from 'react'

function Items() {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonList>
            <IonItem button onClick={() => {}}>
              <IonLabel>Item 1</IonLabel>
            </IonItem>
            <IonItem button onClick={() => {}}>
              <IonLabel>Item 2</IonLabel>
            </IonItem>
            <IonItem button onClick={() => {}}>
              <IonLabel>Item 3</IonLabel>
            </IonItem>
            <IonItem button onClick={() => {}}>
              <IonLabel>Item 4</IonLabel>
            </IonItem>
            <IonItem button onClick={() => {}}>
              <IonLabel>Item 5</IonLabel>
            </IonItem>
            <IonItem button onClick={() => {}}>
              <IonLabel>Item 6</IonLabel>
            </IonItem>
          </IonList>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}

export default Items