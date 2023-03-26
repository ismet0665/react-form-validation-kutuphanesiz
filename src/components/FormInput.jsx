import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focus, setFocus] = useState(false);

  const {
    onChange,
    label,
    name,
    type,
    placeholder,
    pattern,
    errorMessage,
  } = props;

  const handleFocus = () => {
    setFocus(true);
  };

  return (
    <div className="form-input">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        pattern={pattern}
        onChange={onChange}
        focus={focus.toString()}
        onBlur={handleFocus}
        onFocus={() => name === "confirmPassword" && setFocus(true)}
      />
      <span> {errorMessage} </span>
    </div>
  );
};

export default FormInput;
// onBlur yine inputta olan bir özellik.
//! onBlur, o an seçili ve aktif olan elemanın terkedilmesi ve seçilmiş özelliğini kaybetmesi olayıdır. Örneğin bir metin kutusuna tıklandığında onFocus olayı gerçekleşir. Yani o kutuya odaklanılmış olur ve kutu aktif hale gelir. Sayfadaki herhangi başka bir yere tıklanarak kutudan çıkıldığında ise o kutu için onBlur olayı gerçekleşmiş olur.
//! Pattern özelliği giriş alanına girilen değer ile regexp değerinin denetlenmesini belirtir.
// pattern validasyonlarımızın hangi standartta olmasını istiyorsak.pattern özelliği girişin düzenli ifadeye göre olacağını belirtir.pattern özelliği text, search, url, tel, email ve password input tiplerinde kullanılır.
// T.C Kimlik No veri giriş alanına 11 haneli ve sadece sayı girişini kabul eden düzenli ifade yazılmıştır.
//  <input type="text" name="kimlikno" pattern="[0-9]{11}" />
/*
[A-Z] Büyük harfler kullanılabilir.
[a-z] Küçük harfler kullanılabilir.
[0-9] Rakamlar kullanılabilir.
Büyük ve küçük harfler ile sadece üç karakterden oluşan bir girişin yapılabilmesi; pattern="[A-Za-z]{3}"
*/

/*
pattern="regexp"
Yalnızca üç harf içerebilen (sayı veya özel karakter içermeyen) bir giriş alanına sahip bir HTML formu: pattern="[A-Za-z]{3}"
 8 veya daha fazla karakter içermelidir: pattern=".{8,}"
en az bir sayıdan ve bir büyük ve küçük harften oluşan 8 veya daha fazla karakter içermelidir:  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"

şu sırada olmalıdır: character@characters.domain (karakterler, ardından bir @ işareti, ardından daha fazla karakter ve ardından bir "." pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">

şu karakterleri İÇERMEZ: ' or " pattern="[^'\x22]+"
*/
