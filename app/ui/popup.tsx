import { IPopUpProps } from '@/app/lib/definitions';

export default function PopUp(props: IPopUpProps) {
  return (
    <>
      {props.trigger && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity backdrop-blur-sm">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"/>
            <div className="inline-block align-bottom bg-mygray-300 rounded-[15px] text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-mygray-300 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col items-center">
                <div className="text-[36px] font-bold mb-4">{props.children}</div>
                <div className="sm:flex sm:items-start">
                  <button
                    type="button"
                    className="mt-3 h-16 w-full inline-flex justify-center rounded-[15px] text-[36px] border border-gray-300 shadow-sm px-4 py-2 bg-mygray-600 text-mygray-300 hover:bg-mygray-500 sm:mt-0 sm:ml-3 sm:w-auto"
                    onClick={() => {
                      props.setTrigger(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}