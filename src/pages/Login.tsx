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
        }, 5000);
    }
  return (
    <IonPage>
      <IonContent>
        <IonGrid className="login-center" fixed>
          <IonRow className="img-comp">
            <IonCol size='3.5' className="ion-align-self-start"></IonCol>
            <IonCol className="ion-align-self-center">
              <img
                className="img-border"
                src="./assets/img/logo512.png"
                width={150}
              />
            </IonCol>
            <IonCol size='3' className="ion-align-self-end"></IonCol>
          </IonRow>
          <IonRow className="login-bg">
            <IonCol className="login-comp" size="8" offset="2">
              <IonItem className='BorderItem'>
                <IonInput color={"primary"} placeholder="Usuario"></IonInput>
              </IonItem>
            </IonCol>
            <IonCol className="login-comp" size="8" offset="2">
              <IonItem className='BorderItem'>
                <IonInput type="password" color={"primary"} placeholder="Contraseña"></IonInput>
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
            <IonCol className='Space'>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default Login