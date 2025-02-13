"use strict";
{
    globalThis.C3.Plugins.EMI_INDO_CheckInternetAccess.Cnds = {
        Online()
        {
            return true;
        },

        Offline()
        {
            return true;
        },

        Error()
        {
            return true;
        },

        IsStatus(isStatus)
        {
            if (this._internetAccess && isStatus === 0)
            {

                return true;


            }
            else if (!this._internetAccess && isStatus === 1)
            {

                return true;


            }
            else if (!this._internetAccess && isStatus === 2)
            {

                return true;


            }
        }
    };
}