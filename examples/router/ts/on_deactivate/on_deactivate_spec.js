'use strict';"use strict";
var e2e_util_1 = require('angular2/src/testing/e2e_util');
var testing_1 = require('angular2/testing');
function waitForElement(selector) {
    var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be present on the dom.
    e2e_util_1.browser.wait(EC.presenceOf($(selector)), 20000);
}
describe('on activate example app', function () {
    afterEach(e2e_util_1.verifyNoBrowserErrors);
    var URL = 'angular2/examples/router/ts/on_deactivate/';
    it('should update the text when navigating between routes', function () {
        e2e_util_1.browser.get(URL);
        waitForElement('my-cmp');
        testing_1.expect(element(by.css('#log')).getText()).toEqual('Log:');
        element(by.css('#param-link')).click();
        waitForElement('my-cmp');
        testing_1.expect(element(by.css('#log')).getText()).toEqual('Log:\nNavigating from "" to "1"');
        e2e_util_1.browser.navigate().back();
        waitForElement('my-cmp');
        testing_1.expect(element(by.css('#log')).getText())
            .toEqual('Log:\nNavigating from "" to "1"\nNavigating from "1" to ""');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25fZGVhY3RpdmF0ZV9zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1xMjhGdUNHVS50bXAvYW5ndWxhcjIvZXhhbXBsZXMvcm91dGVyL3RzL29uX2RlYWN0aXZhdGUvb25fZGVhY3RpdmF0ZV9zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5QkFBNkMsK0JBQStCLENBQUMsQ0FBQTtBQUM3RSx3QkFBcUIsa0JBQWtCLENBQUMsQ0FBQTtBQUV4Qyx3QkFBd0IsUUFBZ0I7SUFDdEMsSUFBSSxFQUFFLEdBQVMsVUFBVyxDQUFDLGtCQUFrQixDQUFDO0lBQzlDLGdFQUFnRTtJQUNoRSxrQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxRQUFRLENBQUMseUJBQXlCLEVBQUU7SUFDbEMsU0FBUyxDQUFDLGdDQUFxQixDQUFDLENBQUM7SUFFakMsSUFBSSxHQUFHLEdBQUcsNENBQTRDLENBQUM7SUFFdkQsRUFBRSxDQUFDLHVEQUF1RCxFQUFFO1FBQzFELGtCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6QixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFekIsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFFckYsa0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFekIsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3BDLE9BQU8sQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO0lBQzdFLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3ZlcmlmeU5vQnJvd3NlckVycm9ycywgYnJvd3Nlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL3Rlc3RpbmcvZTJlX3V0aWwnO1xuaW1wb3J0IHtleHBlY3R9IGZyb20gJ2FuZ3VsYXIyL3Rlc3RpbmcnO1xuXG5mdW5jdGlvbiB3YWl0Rm9yRWxlbWVudChzZWxlY3Rvcjogc3RyaW5nKSB7XG4gIHZhciBFQyA9ICg8YW55PnByb3RyYWN0b3IpLkV4cGVjdGVkQ29uZGl0aW9ucztcbiAgLy8gV2FpdHMgZm9yIHRoZSBlbGVtZW50IHdpdGggaWQgJ2FiYycgdG8gYmUgcHJlc2VudCBvbiB0aGUgZG9tLlxuICBicm93c2VyLndhaXQoRUMucHJlc2VuY2VPZigkKHNlbGVjdG9yKSksIDIwMDAwKTtcbn1cblxuZGVzY3JpYmUoJ29uIGFjdGl2YXRlIGV4YW1wbGUgYXBwJywgZnVuY3Rpb24oKSB7XG4gIGFmdGVyRWFjaCh2ZXJpZnlOb0Jyb3dzZXJFcnJvcnMpO1xuXG4gIHZhciBVUkwgPSAnYW5ndWxhcjIvZXhhbXBsZXMvcm91dGVyL3RzL29uX2RlYWN0aXZhdGUvJztcblxuICBpdCgnc2hvdWxkIHVwZGF0ZSB0aGUgdGV4dCB3aGVuIG5hdmlnYXRpbmcgYmV0d2VlbiByb3V0ZXMnLCBmdW5jdGlvbigpIHtcbiAgICBicm93c2VyLmdldChVUkwpO1xuICAgIHdhaXRGb3JFbGVtZW50KCdteS1jbXAnKTtcblxuICAgIGV4cGVjdChlbGVtZW50KGJ5LmNzcygnI2xvZycpKS5nZXRUZXh0KCkpLnRvRXF1YWwoJ0xvZzonKTtcblxuICAgIGVsZW1lbnQoYnkuY3NzKCcjcGFyYW0tbGluaycpKS5jbGljaygpO1xuICAgIHdhaXRGb3JFbGVtZW50KCdteS1jbXAnKTtcblxuICAgIGV4cGVjdChlbGVtZW50KGJ5LmNzcygnI2xvZycpKS5nZXRUZXh0KCkpLnRvRXF1YWwoJ0xvZzpcXG5OYXZpZ2F0aW5nIGZyb20gXCJcIiB0byBcIjFcIicpO1xuXG4gICAgYnJvd3Nlci5uYXZpZ2F0ZSgpLmJhY2soKTtcbiAgICB3YWl0Rm9yRWxlbWVudCgnbXktY21wJyk7XG5cbiAgICBleHBlY3QoZWxlbWVudChieS5jc3MoJyNsb2cnKSkuZ2V0VGV4dCgpKVxuICAgICAgICAudG9FcXVhbCgnTG9nOlxcbk5hdmlnYXRpbmcgZnJvbSBcIlwiIHRvIFwiMVwiXFxuTmF2aWdhdGluZyBmcm9tIFwiMVwiIHRvIFwiXCInKTtcbiAgfSk7XG59KTtcbiJdfQ==