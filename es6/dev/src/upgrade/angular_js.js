function noNg() {
    throw new Error('AngularJS v1.x is not loaded!');
}
var angular = {
    bootstrap: noNg,
    module: noNg,
    element: noNg,
    version: noNg,
    resumeBootstrap: noNg,
    getTestability: noNg
};
try {
    if (window.hasOwnProperty('angular')) {
        angular = window.angular;
    }
}
catch (e) {
}
export var bootstrap = angular.bootstrap;
export var module = angular.module;
export var element = angular.element;
export var version = angular.version;
export var resumeBootstrap = angular.resumeBootstrap;
export var getTestability = angular.getTestability;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9qcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtVlBhN0NyZloudG1wL2FuZ3VsYXIyL3NyYy91cGdyYWRlL2FuZ3VsYXJfanMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0hBO0lBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFFRCxJQUFJLE9BQU8sR0FPRTtJQUNQLFNBQVMsRUFBRSxJQUFJO0lBQ2YsTUFBTSxFQUFFLElBQUk7SUFDWixPQUFPLEVBQUUsSUFBSTtJQUNiLE9BQU8sRUFBRSxJQUFJO0lBQ2IsZUFBZSxFQUFFLElBQUk7SUFDckIsY0FBYyxFQUFFLElBQUk7Q0FDckIsQ0FBQztBQUdOLElBQUksQ0FBQztJQUNILEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sR0FBUyxNQUFPLENBQUMsT0FBTyxDQUFDO0lBQ2xDLENBQUM7QUFDSCxDQUFFO0FBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUViLENBQUM7QUFFRCxPQUFPLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDekMsT0FBTyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ25DLE9BQU8sSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUNyQyxPQUFPLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDckMsT0FBTyxJQUFJLGVBQWUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDO0FBQ3JELE9BQU8sSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSU1vZHVsZSB7XG4gIGNvbmZpZyhmbjogYW55KTogSU1vZHVsZTtcbiAgZGlyZWN0aXZlKHNlbGVjdG9yOiBzdHJpbmcsIGZhY3Rvcnk6IGFueSk6IElNb2R1bGU7XG4gIGNvbXBvbmVudChzZWxlY3Rvcjogc3RyaW5nLCBjb21wb25lbnQ6IElDb21wb25lbnQpOiBJTW9kdWxlO1xuICBjb250cm9sbGVyKG5hbWU6IHN0cmluZywgdHlwZTogYW55KTogSU1vZHVsZTtcbiAgZmFjdG9yeShrZXk6IHN0cmluZywgZmFjdG9yeUZuOiBhbnkpOiBJTW9kdWxlO1xuICB2YWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IElNb2R1bGU7XG4gIHJ1bihhOiBhbnkpOiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBJQ29tcGlsZVNlcnZpY2Uge1xuICAoZWxlbWVudDogRWxlbWVudCB8IE5vZGVMaXN0IHwgc3RyaW5nLCB0cmFuc2NsdWRlPzogRnVuY3Rpb24pOiBJTGlua0ZuO1xufVxuZXhwb3J0IGludGVyZmFjZSBJTGlua0ZuIHtcbiAgKHNjb3BlOiBJU2NvcGUsIGNsb25lQXR0YWNoRm4/OiBGdW5jdGlvbiwgb3B0aW9ucz86IElMaW5rRm5PcHRpb25zKTogdm9pZDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSUxpbmtGbk9wdGlvbnMge1xuICBwYXJlbnRCb3VuZFRyYW5zY2x1ZGVGbj86IEZ1bmN0aW9uO1xuICB0cmFuc2NsdWRlQ29udHJvbGxlcnM/OiB7W2tleTogc3RyaW5nXTogYW55fTtcbiAgZnV0dXJlUGFyZW50RWxlbWVudD86IE5vZGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIElSb290U2NvcGVTZXJ2aWNlIHtcbiAgJG5ldyhpc29sYXRlPzogYm9vbGVhbik6IElTY29wZTtcbiAgJGlkOiBzdHJpbmc7XG4gICR3YXRjaChleHByOiBhbnksIGZuPzogKGExPzogYW55LCBhMj86IGFueSkgPT4gdm9pZCk6IEZ1bmN0aW9uO1xuICAkZGVzdHJveSgpOiBhbnk7XG4gICRhcHBseSgpOiBhbnk7XG4gICRhcHBseShleHA6IHN0cmluZyk6IGFueTtcbiAgJGFwcGx5KGV4cDogRnVuY3Rpb24pOiBhbnk7XG4gICQkY2hpbGRUYWlsOiBJU2NvcGU7XG4gICQkY2hpbGRIZWFkOiBJU2NvcGU7XG4gICQkbmV4dFNpYmxpbmc6IElTY29wZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVNjb3BlIGV4dGVuZHMgSVJvb3RTY29wZVNlcnZpY2Uge31cbmV4cG9ydCBpbnRlcmZhY2UgSUFuZ3VsYXJCb290c3RyYXBDb25maWcge31cbmV4cG9ydCBpbnRlcmZhY2UgSURpcmVjdGl2ZSB7XG4gIGNvbXBpbGU/OiBJRGlyZWN0aXZlQ29tcGlsZUZuO1xuICBjb250cm9sbGVyPzogYW55O1xuICBjb250cm9sbGVyQXM/OiBzdHJpbmc7XG4gIGJpbmRUb0NvbnRyb2xsZXI/OiBib29sZWFuIHwgT2JqZWN0O1xuICBsaW5rPzogSURpcmVjdGl2ZUxpbmtGbiB8IElEaXJlY3RpdmVQcmVQb3N0O1xuICBuYW1lPzogc3RyaW5nO1xuICBwcmlvcml0eT86IG51bWJlcjtcbiAgcmVwbGFjZT86IGJvb2xlYW47XG4gIHJlcXVpcmU/OiBhbnk7XG4gIHJlc3RyaWN0Pzogc3RyaW5nO1xuICBzY29wZT86IGFueTtcbiAgdGVtcGxhdGU/OiBhbnk7XG4gIHRlbXBsYXRlVXJsPzogYW55O1xuICB0ZXJtaW5hbD86IGJvb2xlYW47XG4gIHRyYW5zY2x1ZGU/OiBhbnk7XG59XG5leHBvcnQgaW50ZXJmYWNlIElEaXJlY3RpdmVDb21waWxlRm4ge1xuICAodGVtcGxhdGVFbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LCB0ZW1wbGF0ZUF0dHJpYnV0ZXM6IElBdHRyaWJ1dGVzLFxuICAgdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbik6IElEaXJlY3RpdmVQcmVQb3N0O1xufVxuZXhwb3J0IGludGVyZmFjZSBJRGlyZWN0aXZlUHJlUG9zdCB7XG4gIHByZT86IElEaXJlY3RpdmVMaW5rRm47XG4gIHBvc3Q/OiBJRGlyZWN0aXZlTGlua0ZuO1xufVxuZXhwb3J0IGludGVyZmFjZSBJRGlyZWN0aXZlTGlua0ZuIHtcbiAgKHNjb3BlOiBJU2NvcGUsIGluc3RhbmNlRWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSwgaW5zdGFuY2VBdHRyaWJ1dGVzOiBJQXR0cmlidXRlcyxcbiAgIGNvbnRyb2xsZXI6IGFueSwgdHJhbnNjbHVkZTogSVRyYW5zY2x1ZGVGdW5jdGlvbik6IHZvaWQ7XG59XG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnQge1xuICBiaW5kaW5ncz86IE9iamVjdDtcbiAgY29udHJvbGxlcj86IGFueTtcbiAgY29udHJvbGxlckFzPzogc3RyaW5nO1xuICByZXF1aXJlPzogYW55O1xuICB0ZW1wbGF0ZT86IGFueTtcbiAgdGVtcGxhdGVVcmw/OiBhbnk7XG4gIHRyYW5zY2x1ZGU/OiBhbnk7XG59XG5leHBvcnQgaW50ZXJmYWNlIElBdHRyaWJ1dGVzIHsgJG9ic2VydmUoYXR0cjogc3RyaW5nLCBmbjogKHY6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQ7IH1cbmV4cG9ydCBpbnRlcmZhY2UgSVRyYW5zY2x1ZGVGdW5jdGlvbiB7XG4gIC8vIElmIHRoZSBzY29wZSBpcyBwcm92aWRlZCwgdGhlbiB0aGUgY2xvbmVBdHRhY2hGbiBtdXN0IGJlIGFzIHdlbGwuXG4gIChzY29wZTogSVNjb3BlLCBjbG9uZUF0dGFjaEZuOiBJQ2xvbmVBdHRhY2hGdW5jdGlvbik6IElBdWdtZW50ZWRKUXVlcnk7XG4gIC8vIElmIG9uZSBhcmd1bWVudCBpcyBwcm92aWRlZCwgdGhlbiBpdCdzIGFzc3VtZWQgdG8gYmUgdGhlIGNsb25lQXR0YWNoRm4uXG4gIChjbG9uZUF0dGFjaEZuPzogSUNsb25lQXR0YWNoRnVuY3Rpb24pOiBJQXVnbWVudGVkSlF1ZXJ5O1xufVxuZXhwb3J0IGludGVyZmFjZSBJQ2xvbmVBdHRhY2hGdW5jdGlvbiB7XG4gIC8vIExldCdzIGhpbnQgYnV0IG5vdCBmb3JjZSBjbG9uZUF0dGFjaEZuJ3Mgc2lnbmF0dXJlXG4gIChjbG9uZWRFbGVtZW50PzogSUF1Z21lbnRlZEpRdWVyeSwgc2NvcGU/OiBJU2NvcGUpOiBhbnk7XG59XG5leHBvcnQgaW50ZXJmYWNlIElBdWdtZW50ZWRKUXVlcnkge1xuICBiaW5kKG5hbWU6IHN0cmluZywgZm46ICgpID0+IHZvaWQpOiB2b2lkO1xuICBkYXRhKG5hbWU6IHN0cmluZywgdmFsdWU/OiBhbnkpOiBhbnk7XG4gIGluaGVyaXRlZERhdGEobmFtZTogc3RyaW5nLCB2YWx1ZT86IGFueSk6IGFueTtcbiAgY29udGVudHMoKTogSUF1Z21lbnRlZEpRdWVyeTtcbiAgcGFyZW50KCk6IElBdWdtZW50ZWRKUXVlcnk7XG4gIGxlbmd0aDogbnVtYmVyO1xuICBbaW5kZXg6IG51bWJlcl06IE5vZGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIElQYXJzZVNlcnZpY2UgeyAoZXhwcmVzc2lvbjogc3RyaW5nKTogSUNvbXBpbGVkRXhwcmVzc2lvbjsgfVxuZXhwb3J0IGludGVyZmFjZSBJQ29tcGlsZWRFeHByZXNzaW9uIHsgYXNzaWduKGNvbnRleHQ6IGFueSwgdmFsdWU6IGFueSk6IGFueTsgfVxuZXhwb3J0IGludGVyZmFjZSBJSHR0cEJhY2tlbmRTZXJ2aWNlIHtcbiAgKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZywgcG9zdD86IGFueSwgY2FsbGJhY2s/OiBGdW5jdGlvbiwgaGVhZGVycz86IGFueSwgdGltZW91dD86IG51bWJlcixcbiAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW4pOiB2b2lkO1xufVxuZXhwb3J0IGludGVyZmFjZSBJQ2FjaGVPYmplY3Qge1xuICBwdXQ8VD4oa2V5OiBzdHJpbmcsIHZhbHVlPzogVCk6IFQ7XG4gIGdldChrZXk6IHN0cmluZyk6IGFueTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlQ2FjaGVTZXJ2aWNlIGV4dGVuZHMgSUNhY2hlT2JqZWN0IHt9XG5leHBvcnQgaW50ZXJmYWNlIElDb250cm9sbGVyU2VydmljZSB7XG4gIChjb250cm9sbGVyQ29uc3RydWN0b3I6IEZ1bmN0aW9uLCBsb2NhbHM/OiBhbnksIGxhdGVyPzogYW55LCBpZGVudD86IGFueSk6IGFueTtcbiAgKGNvbnRyb2xsZXJOYW1lOiBzdHJpbmcsIGxvY2Fscz86IGFueSk6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSW5qZWN0b3JTZXJ2aWNlIHsgZ2V0KGtleTogc3RyaW5nKTogYW55OyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRlc3RhYmlsaXR5U2VydmljZSB7XG4gIGZpbmRCaW5kaW5ncyhlbGVtZW50OiBFbGVtZW50LCBleHByZXNzaW9uOiBzdHJpbmcsIG9wdF9leGFjdE1hdGNoPzogYm9vbGVhbik6IEVsZW1lbnRbXTtcbiAgZmluZE1vZGVscyhlbGVtZW50OiBFbGVtZW50LCBleHByZXNzaW9uOiBzdHJpbmcsIG9wdF9leGFjdE1hdGNoPzogYm9vbGVhbik6IEVsZW1lbnRbXTtcbiAgZ2V0TG9jYXRpb24oKTogc3RyaW5nO1xuICBzZXRMb2NhdGlvbih1cmw6IHN0cmluZyk6IHZvaWQ7XG4gIHdoZW5TdGFibGUoY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZDtcbn1cblxuZnVuY3Rpb24gbm9OZygpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdBbmd1bGFySlMgdjEueCBpcyBub3QgbG9hZGVkIScpO1xufVxuXG52YXIgYW5ndWxhcjpcbiAgICB7XG4gICAgICBib290c3RyYXA6IChlOiBFbGVtZW50LCBtb2R1bGVzOiBzdHJpbmdbXSwgY29uZmlnOiBJQW5ndWxhckJvb3RzdHJhcENvbmZpZykgPT4gdm9pZCxcbiAgICAgIG1vZHVsZTogKHByZWZpeDogc3RyaW5nLCBkZXBlbmRlbmNpZXM/OiBzdHJpbmdbXSkgPT4gSU1vZHVsZSxcbiAgICAgIGVsZW1lbnQ6IChlOiBFbGVtZW50KSA9PiBJQXVnbWVudGVkSlF1ZXJ5LFxuICAgICAgdmVyc2lvbjoge21ham9yOiBudW1iZXJ9LCByZXN1bWVCb290c3RyYXA/OiAoKSA9PiB2b2lkLFxuICAgICAgZ2V0VGVzdGFiaWxpdHk6IChlOiBFbGVtZW50KSA9PiBJVGVzdGFiaWxpdHlTZXJ2aWNlXG4gICAgfSA9IDxhbnk+e1xuICAgICAgYm9vdHN0cmFwOiBub05nLFxuICAgICAgbW9kdWxlOiBub05nLFxuICAgICAgZWxlbWVudDogbm9OZyxcbiAgICAgIHZlcnNpb246IG5vTmcsXG4gICAgICByZXN1bWVCb290c3RyYXA6IG5vTmcsXG4gICAgICBnZXRUZXN0YWJpbGl0eTogbm9OZ1xuICAgIH07XG5cblxudHJ5IHtcbiAgaWYgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnYW5ndWxhcicpKSB7XG4gICAgYW5ndWxhciA9ICg8YW55PndpbmRvdykuYW5ndWxhcjtcbiAgfVxufSBjYXRjaCAoZSkge1xuICAvLyBpZ25vcmUgaW4gQ0pTIG1vZGUuXG59XG5cbmV4cG9ydCB2YXIgYm9vdHN0cmFwID0gYW5ndWxhci5ib290c3RyYXA7XG5leHBvcnQgdmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlO1xuZXhwb3J0IHZhciBlbGVtZW50ID0gYW5ndWxhci5lbGVtZW50O1xuZXhwb3J0IHZhciB2ZXJzaW9uID0gYW5ndWxhci52ZXJzaW9uO1xuZXhwb3J0IHZhciByZXN1bWVCb290c3RyYXAgPSBhbmd1bGFyLnJlc3VtZUJvb3RzdHJhcDtcbmV4cG9ydCB2YXIgZ2V0VGVzdGFiaWxpdHkgPSBhbmd1bGFyLmdldFRlc3RhYmlsaXR5O1xuIl19