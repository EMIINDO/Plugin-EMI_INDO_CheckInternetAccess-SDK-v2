"use strict";
{


    globalThis.C3.Plugins.EMI_INDO_CheckInternetAccess.Instance = class CheckInternetAccessInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();


            if (properties) { }



            const self = this;

            this.CallBack = globalThis.C3.Plugins.EMI_INDO_CheckInternetAccess.Cnds;

            this._internetAccess = false;
            this._errorMessage = "";

            return this.updateOnlineStatusWithFetch();




        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }


        async checkInternetAccess() {
            try {
                const response = await fetch('https://www.google.com',
                    {
                        mode: 'no-cors'
                    });
                return response.type === 'opaque';
            }
            catch (error) {
                return false;
            }
        }

        updateOnlineStatusWithFetch() {
            const self = this;

            this.checkInternetAccess()
                .then(hasInternetAccess => {
                    if (hasInternetAccess) {
                        console.log("You have internet access!", JSON.stringify(hasInternetAccess));

                        self._internetAccess = (hasInternetAccess);
                        self._trigger(self.CallBack.Online);
                    }
                    else {
                        console.log("You are offline or cannot reach the internet!");
                        self._trigger(self.CallBack.Offline);
                    }
                })
                .
                catch(error => {
                    console.error("An error occurred while checking internet access:", error);
                    self._errorMessage = (error);
                    self._trigger(self.CallBack.Error);
                });
        }

        SetStatus(_index) {
            switch (_index) {
                case 0:
                    return true;
                case 1:
                    return false;
                case 2:
                    return false;

            }
        };


    };
}