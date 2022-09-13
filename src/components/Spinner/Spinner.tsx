import { IonCol, IonGrid, IonRow, IonSpinner } from '@ionic/react'
import React from 'react'

function Spinner() {
  return (
    <IonCol size="12" sizeSm="center" offset="5">
      <IonSpinner color={"primary"} name="circular" />
    </IonCol>
  );
}

export default Spinner