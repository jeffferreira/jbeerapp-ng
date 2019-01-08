import { Injectable } from '@angular/core';
import { AccountService } from './account.service';

@Injectable({ providedIn: 'root' })
export class Principal {
    
    private userIdentity: any;

    constructor(private account: AccountService) {}

    identity(force?: boolean): Promise<any> {
        if (force === true) {
            this.userIdentity = undefined;
        }

        // check and see if we have retrieved the userIdentity data from the server.
        // if we have, reuse it by immediately resolving
        if (this.userIdentity) {
            return Promise.resolve(this.userIdentity);
        }

        // retrieve the userIdentity data from the server, update the identity object, and then resolve.
        return this.account
            .get()
            .toPromise()
            .then(response => {
                const account = response.body;
                
                if (account) {
                    this.userIdentity = account;
                } else {
                    this.userIdentity = null;
                }

                return this.userIdentity;
            })
            .catch(err => {
                this.userIdentity = null;
                return null;
            });
    }

    isIdentityResolved(): boolean {
        return this.userIdentity !== undefined;
    }

    getImageUrl(): string {
        return this.isIdentityResolved() ? this.userIdentity.imageUrl : null;
    }

    copyAccount(account) {
        return {
            activated: account.activated,
            email: account.email,
            firstName: account.firstName,
            langKey: account.langKey,
            lastName: account.lastName,
            login: account.login,
            imageUrl: account.imageUrl
        };
    }
}
