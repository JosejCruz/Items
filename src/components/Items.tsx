import { IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonRadio, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react'
import React from 'react'

function Items() {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonList>
            <IonItem>
              <IonLabel>Input</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>Toggle</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Radio</IonLabel>
              <IonRadio slot="end"></IonRadio>
            </IonItem>
            <IonItem>
              <IonLabel>Checkbox</IonLabel>
              <IonCheckbox slot="end" />
            </IonItem>
            <IonItemSliding>
              <IonItem>
                <IonLabel>Item</IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption onClick={() => {}}>Unread</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>

            <IonItemSliding>
              <IonItem>
                <IonLabel>Item</IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption onClick={() => {}}>Unread</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          </IonList>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}

export default Items