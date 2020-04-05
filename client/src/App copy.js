import React, { useState } from 'react';
import '."../App.css";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useForm } from "react-hook-form";

const EXCHANGE_RATES = gql`{
      nendoroids {
      id
      name
      series {
        id
        name
      }
      interactions {
        id
        type
        user {
          id
        }
      }
      images {
        id
        name
        caption
        width
        height
        formats
        url
        previewUrl
        provider
        provider_metadata
      }
    }
  }
`;

const Typography = ({ text, type }) => {
  const styles = {
    h1: {
      fontSize: "1.2rem",
      textAlign: "center"
    },
    h2: {
      fontSize: "1rem",
      textAlign: "center"
    }
  }
  return (
    <div style={styles[type]}>{text}</div>
  )
}

const Card = ({ name, id, images, liked }) => {
  const [onHover, setOnHover] = useState(false);
  const styles = {
    wrapper: {
      height: "500px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
      border: "1px solid grey",
      cursor: "pointer",
    },
    infoDefault: {
      paddingTop: "1rem",
      position: "absolute",
      height: "15%",
      width: "100%",
      bottom: "0",
      backgroundColor: "white",
      transition: "all 0.1s ease-in",
    },
    infoHover: {
      paddingTop: "1rem",
      position: "absolute",
      height: "30%",
      width: "100%",
      bottom: "0",
      backgroundColor: "white",
      transition: "all 0.1s ease-in",
    },
    imgDefault: {
      height: "100%",
      width: "100%",
      position: "absolute",
      top: "-10px",
      transition: "all 0.1s ease-in",
      transform: "scale(1.1)",
    },
    imgHover: {
      height: "100%",
      width: "100%",
      position: "absolute",
      top: "-30px",
      transition: "all 0.1s ease-in",
      transform: "scale(1.1)",
    }
  }

  const actions = {
    like: {
      height: "100px",
      width: "100px",
      border: "2px solid white",
      position: "absolute"
    },
    likeNot: {
      height: "100px",
      width: "100px",
      border: "2px solid red",
      position: "absolute"
    }
  }
  return (
    <div onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)} key={id} style={styles.wrapper}>
      <div style={onHover ? styles.imgHover : styles.imgDefault}>
        <img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={`http://localhost:1337${images[0].url}`} alt={id} />
      </div>
      <div style={liked ? actions.likeNot : actions.like} onClick={() => console.log(id)}>

      </div>
      <div style={onHover ? styles.infoHover : styles.infoDefault}>
        <Typography text={name} type="h1" />
        <Typography text={name} type="h2" />
      </div>
    </div>
  )
}

function Login() {
  const LOGIN = gql`
  mutation Login($identifier: String! $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        username
        email
        id
      }
    }
  }
`;
  const [login] = useMutation(LOGIN, {
    onCompleted: data => {
      const authPayload = {
        mail: data.login.user.email,
        username: data.login.user.username,
        token: data.login.jwt,
        id: data.login.user.id,
      }
      localStorage.setItem("auth", JSON.stringify(authPayload))
    }
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => login({ variables: { "identifier": data.identifier, "password": data.password } });
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <input name="identifier" placeholder="identifier" ref={register} />
      <input name="password" placeholder="password" ref={register} />
      <input type="submit" />
    </form >
  );
}

function App() {
  const styles = {
    section: {
      display: "flex",
      justifyContent: "center",
      padding: "5rem 0"
    },
    wrapper: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridGap: "10px",
      minWidth: "900px",
      width: "900px",
    }
  }

  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <section style={styles.section}>
      <div style={styles.wrapper}>
        {
          data.nendoroids.map(({ id, name, images, interactions }) => <Card name={name} id={id} images={images} liked={interactions.filter(i => i.user.id === JSON.parse(localStorage.getItem("auth")).id).length > 0 } />)
        }
      </div>
      <Login />
    </section>
  )
}

export default App;
