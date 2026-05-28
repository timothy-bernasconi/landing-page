'use client';

import { useState, useEffect } from 'react';
import styles from './Form.module.scss';

function Form() {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [securityNum, setSecurityNum] = useState({ a: 0, b: 0 });

  useEffect(() => {
    setSecurityNum({
      a: Math.floor(Math.random() * 10),
      b: Math.floor(Math.random() * 5)
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot !== "") return;
    if (parseInt(captchaAnswer) !== securityNum.a + securityNum.b) {
      setStatus("Le résultat du calcul est incorrect.");
      return;
    }

    setLoading(true);
    setStatus("Envoi en cours...");

    const formData = { name, firstName, email, phone, message };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.status === 429) {
        setStatus("Trop de tentatives. Réessayez dans quelques minutes.");
        setLoading(false);
        return;
      }

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
        setName(""); setFirstName(""); setEmail(""); setPhone(""); setMessage(""); setCaptchaAnswer("");
        setSecurityNum({
          a: Math.floor(Math.random() * 10),
          b: Math.floor(Math.random() * 5)
        });
      } else {
        setStatus("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      setStatus("Erreur de connexion au serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.group} id='form'>
    
      <div className={styles.container}>
        <form className={styles.wrapper} onSubmit={handleSubmit}>
          <div style={{ display: 'none' }} aria-hidden="true">
            <input type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex="-1" autoComplete="off" />
          </div>

          <label>Nom *
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>

          <label>Prénom *
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </label>

          <label>Email *
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>

          <label>Téléphone *
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </label>

          <label>Votre message *
            <textarea className={styles.textareaField} value={message} onChange={(e) => setMessage(e.target.value)} rows="3" required></textarea>
          </label>

          <label style={{ marginTop: '10px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
            Sécurité : Combien font {securityNum.a} + {securityNum.b} ? *
            <input type="number" value={captchaAnswer} onChange={(e) => setCaptchaAnswer(e.target.value)} required placeholder="Réponse" />
          </label>

          <button type="submit" className={styles.btn} disabled={loading}>
            {loading ? "Envoi..." : "Envoyer"}
          </button>

          {status && <p className={styles.statusMessage}>{status}</p>}
        </form>

        <div className={styles.pic}>
          <img src="/assets/image-form.jpg" alt="Image formulaire" />
        </div>
      </div>
    </div>
  );
}

export default Form;