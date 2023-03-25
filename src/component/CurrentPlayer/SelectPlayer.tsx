import { memo } from 'react'
type SelectPlayerProps = {

}

const SelectPlayer = () => {

  return (
    <form>
      <div>
          <input defaultChecked type="radio" id="contactChoice1" name="contact" value="email" />
          <label htmlFor="contactChoice1">Email</label>

          <input type="radio" id="contactChoice2" name="contact" value="phone" />
          <label htmlFor="contactChoice2">Phone</label>        
        </div>
    </form>
  );

}

export default memo(SelectPlayer);