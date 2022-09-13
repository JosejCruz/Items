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
      <IonContent>
        <IonGrid className="login-center" fixed>
          <IonRow class="img-comp">
            <IonCol size="6" offset="3.5">
              <img
                className="img-border"
                src="./assets/img/logo512.png"
                width={150}
              />
            </IonCol>
          </IonRow>
          <IonRow className="login-bg">
            <IonCol className="login-comp" size="8" offset="2">
              <IonItem>
                <IonLabel position="floating">Usuario</IonLabel>
                <IonInput color={"primary"}></IonInput>
              </IonItem>
            </IonCol>
            <IonCol className="login-comp" size="8" offset="2">
              <IonItem>
                <IonLabel position="floating">Contraseña</IonLabel>
                <IonInput type="password" color={"primary"}></IonInput>
              </IonItem>
            </IonCol>
            <IonCol className="login-comp" size="8" offset="2">
              {(log && (
                <IonButton expand="block" shape="round" color="primary" onClick={handleButton}>
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