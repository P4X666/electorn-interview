import useResumeModel, { type StateKeyType } from "@src/store/resumeModel";

const useUpdateResumeStore = () => {
    const store = useResumeModel();
  return {
    ...store,
    updateCertificate: (key: StateKeyType, value: any) => {
        store.updateStore(key, value)
    },
    updateBase:(key: StateKeyType, value: any)=>{
      store.updateStore('base', value)
    }
  };
};

export default useUpdateResumeStore;