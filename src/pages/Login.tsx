import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import ExploreContainer from '../components/ExploreContainer'
import Spinner from '../components/Spinner/Spinner'

function Login() {
    const [Loading, setLoading] = useState(false)
    const [log, setLog] = useState(true)
    const handleButton = () =>{
        setLog(false)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setLog(true)
        }, 3000);
    }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol size="6" size-lg offset="5">
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/demos/api/avatar/avatar.svg"
                />
              </IonAvatar>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonItemDivider></IonItemDivider>
            <IonCol size="12" size-Lg>
              <IonItemDivider></IonItemDivider>
              <IonItem>
                <IonLabel position="floating">Usuario</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItemDivider></IonItemDivider>
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput type="password"></IonInput>
              </IonItem>
              <IonItemDivider></IonItemDivider>
              {(log && (
                <IonButton
                  shape="round"
                  expand="block"
                  color="primary"
                  onClick={handleButton}
                >
                  Iniciar Sesión
                </IonButton>
              )) ||
                (Loading && <Spinner />)}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default Login