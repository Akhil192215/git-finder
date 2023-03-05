import styles from './Input.module.css'
function Input(props) {
  return (
    <div>
      <input id="input-value" type='text'
      className={styles.input}
      placeholder="search here"
        {...props}
      />
    </div>
  );
}
export default Input