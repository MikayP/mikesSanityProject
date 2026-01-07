type ButtonProps = {
  button?: {
    _key: string;
    _type: string;
    title: string;
    link?: {
      _type: string;
      linkType: 'internal' | 'external' | 'file';
      external?: string;
      internal?: any; // or proper reference type
      file?: any;
    };
    style?: string;
    targetBlank?: boolean;
  };
};

export default function Button({ button }: ButtonProps) {
    // console.log(button)

  return (

     <button>
      {button?.title || 'Button'}
    </button>
  );
}