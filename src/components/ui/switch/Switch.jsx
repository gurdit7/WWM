const Switch = ({onChange,checked, value, name, index})=> {
    return (
      <label className="inline-flex items-center cursor-pointer">
              <input data-index={index} type="checkbox" checked={checked} onChange={onChange} value={value} name={name} className="sr-only peer" />
              <div className="relative w-9 h-5 bg-light-50 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-dark-100 after:shadow-6xl"></div>            
          </label>
    );
  }
  export default Switch;
  