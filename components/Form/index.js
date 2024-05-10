import styles from "./Form.module.css";

export default function Form(){
    return(
        <div className={styles.formOuterContainer}>
        <div className={styles.formContainer}>
            <form>
                <fieldset className={styles.fieldSet}>
                    <label className={styles.label}>Name <span>*</span></label>
                    <input
                        id="name"
                        className={styles.nameInput}
                        type="text"
                        placeholder="Anika"
                    />
                    <label className={styles.label}>Username <span>*</span></label>
                    <input
                        id="userName"
                        className={styles.userNameInput}
                        type="text"
                        placeholder="anika.williams"
                    />
                    <label className={styles.label}>E-Mail <span>*</span></label>
                    <input
                        id="email"
                        className={styles.emailInput}
                        type="text"
                        placeholder="anika_williams@email.com"
                    />
                    <label className={styles.label}>Phone Number</label>
                    <input
                        id="phoneNumber"
                        className={styles.phoneNumberInput}
                        type="text"
                        placeholder="(123) 456 7890"
                    />
                    <label className={styles.label}>Password <span>*</span></label>                       
                    <input
                        id="password"
                        className={styles.passwordInput}
                        type="text"
                        placeholder="*******"
                        />                       
                     </fieldset>
            </form>
        </div>
    </div>
    )
}