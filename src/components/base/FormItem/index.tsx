import { Input, Label, View } from '@tarojs/components';
import './style.less';

const FormItem: React.FC<React.PropsWithChildren<any>> = (props) => {
  const {
    placeholder,
    type = 'text',
    name,
    errMsg,
    right = null,

    ...others
  } = props;

  return (
    <View className="form-item-wrap">
      <View className="row items-center form-item">
        <Label className="flex-1 inline-block">
          <Input
            placeholder={placeholder}
            type={type}
            name={name}
            {...others}
          />
        </Label>
        {right}
      </View>
      <View className="form-err-msg">{errMsg}</View>
    </View>
  );
};

export default FormItem;
