export { verifyNoBrowserErrors } from './e2e_util';
var benchpress = global['benchpress'];
var bind = benchpress.bind;
var Options = benchpress.Options;
export function runClickBenchmark(config) {
    browser.ignoreSynchronization = !config.waitForAngular2;
    var buttons = config.buttons.map(function (selector) { return $(selector); });
    config.work = function () { buttons.forEach(function (button) { button.click(); }); };
    return runBenchmark(config);
}
export function runBenchmark(config) {
    return getScaleFactor(browser.params.benchmark.scaling)
        .then(function (scaleFactor) {
        var description = {};
        var urlParams = [];
        if (config.params) {
            config.params.forEach(function (param) {
                var name = param.name;
                var value = applyScaleFactor(param.value, scaleFactor, param.scale);
                urlParams.push(name + '=' + value);
                description[name] = value;
            });
        }
        var url = encodeURI(config.url + '?' + urlParams.join('&'));
        return browser.get(url).then(function () {
            return global['benchpressRunner'].sample({
                id: config.id,
                execute: config.work,
                prepare: config.prepare,
                microMetrics: config.microMetrics,
                bindings: [bind(Options.SAMPLE_DESCRIPTION).toValue(description)]
            });
        });
    });
}
function getScaleFactor(possibleScalings) {
    return browser.executeScript('return navigator.userAgent')
        .then(function (userAgent) {
        var scaleFactor = 1;
        possibleScalings.forEach(function (entry) {
            if (userAgent.match(entry.userAgent)) {
                scaleFactor = entry.value;
            }
        });
        return scaleFactor;
    });
}
function applyScaleFactor(value, scaleFactor, method) {
    if (method === 'log2') {
        return value + Math.log(scaleFactor) / Math.LN2;
    }
    else if (method === 'sqrt') {
        return value * Math.sqrt(scaleFactor);
    }
    else if (method === 'linear') {
        return value * scaleFactor;
    }
    else {
        return value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZl91dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1WUGE3Q3JmWi50bXAvYW5ndWxhcjIvc3JjL3Rlc3RpbmcvcGVyZl91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFNBQVEscUJBQXFCLFFBQU8sWUFBWSxDQUFDO0FBRWpELElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0QyxJQUFJLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO0FBQzNCLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFFakMsa0NBQWtDLE1BQU07SUFDdEMsT0FBTyxDQUFDLHFCQUFxQixHQUFHLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUN4RCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFTLFFBQVEsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0UsTUFBTSxDQUFDLElBQUksR0FBRyxjQUFhLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBUyxNQUFNLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEYsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsNkJBQTZCLE1BQU07SUFDakMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7U0FDbEQsSUFBSSxDQUFDLFVBQVMsV0FBVztRQUN4QixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVMsS0FBSztnQkFDbEMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDdEIsSUFBSSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwRSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ25DLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDdkMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUNiLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO2dCQUN2QixZQUFZLEVBQUUsTUFBTSxDQUFDLFlBQVk7Z0JBQ2pDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbEUsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNULENBQUM7QUFFRCx3QkFBd0IsZ0JBQWdCO0lBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDO1NBQ3JELElBQUksQ0FBQyxVQUFTLFNBQWlCO1FBQzlCLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNwQixnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBUyxLQUFLO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDNUIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztBQUNULENBQUM7QUFFRCwwQkFBMEIsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNO0lBQ2xELEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xELENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7SUFDN0IsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt2ZXJpZnlOb0Jyb3dzZXJFcnJvcnN9IGZyb20gJy4vZTJlX3V0aWwnO1xuXG52YXIgYmVuY2hwcmVzcyA9IGdsb2JhbFsnYmVuY2hwcmVzcyddO1xudmFyIGJpbmQgPSBiZW5jaHByZXNzLmJpbmQ7XG52YXIgT3B0aW9ucyA9IGJlbmNocHJlc3MuT3B0aW9ucztcblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bkNsaWNrQmVuY2htYXJrKGNvbmZpZykge1xuICBicm93c2VyLmlnbm9yZVN5bmNocm9uaXphdGlvbiA9ICFjb25maWcud2FpdEZvckFuZ3VsYXIyO1xuICB2YXIgYnV0dG9ucyA9IGNvbmZpZy5idXR0b25zLm1hcChmdW5jdGlvbihzZWxlY3RvcikgeyByZXR1cm4gJChzZWxlY3Rvcik7IH0pO1xuICBjb25maWcud29yayA9IGZ1bmN0aW9uKCkgeyBidXR0b25zLmZvckVhY2goZnVuY3Rpb24oYnV0dG9uKSB7IGJ1dHRvbi5jbGljaygpOyB9KTsgfTtcbiAgcmV0dXJuIHJ1bkJlbmNobWFyayhjb25maWcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuQmVuY2htYXJrKGNvbmZpZykge1xuICByZXR1cm4gZ2V0U2NhbGVGYWN0b3IoYnJvd3Nlci5wYXJhbXMuYmVuY2htYXJrLnNjYWxpbmcpXG4gICAgICAudGhlbihmdW5jdGlvbihzY2FsZUZhY3Rvcikge1xuICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSB7fTtcbiAgICAgICAgdmFyIHVybFBhcmFtcyA9IFtdO1xuICAgICAgICBpZiAoY29uZmlnLnBhcmFtcykge1xuICAgICAgICAgIGNvbmZpZy5wYXJhbXMuZm9yRWFjaChmdW5jdGlvbihwYXJhbSkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBwYXJhbS5uYW1lO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gYXBwbHlTY2FsZUZhY3RvcihwYXJhbS52YWx1ZSwgc2NhbGVGYWN0b3IsIHBhcmFtLnNjYWxlKTtcbiAgICAgICAgICAgIHVybFBhcmFtcy5wdXNoKG5hbWUgKyAnPScgKyB2YWx1ZSk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbltuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1cmwgPSBlbmNvZGVVUkkoY29uZmlnLnVybCArICc/JyArIHVybFBhcmFtcy5qb2luKCcmJykpO1xuICAgICAgICByZXR1cm4gYnJvd3Nlci5nZXQodXJsKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBnbG9iYWxbJ2JlbmNocHJlc3NSdW5uZXInXS5zYW1wbGUoe1xuICAgICAgICAgICAgaWQ6IGNvbmZpZy5pZCxcbiAgICAgICAgICAgIGV4ZWN1dGU6IGNvbmZpZy53b3JrLFxuICAgICAgICAgICAgcHJlcGFyZTogY29uZmlnLnByZXBhcmUsXG4gICAgICAgICAgICBtaWNyb01ldHJpY3M6IGNvbmZpZy5taWNyb01ldHJpY3MsXG4gICAgICAgICAgICBiaW5kaW5nczogW2JpbmQoT3B0aW9ucy5TQU1QTEVfREVTQ1JJUFRJT04pLnRvVmFsdWUoZGVzY3JpcHRpb24pXVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTY2FsZUZhY3Rvcihwb3NzaWJsZVNjYWxpbmdzKSB7XG4gIHJldHVybiBicm93c2VyLmV4ZWN1dGVTY3JpcHQoJ3JldHVybiBuYXZpZ2F0b3IudXNlckFnZW50JylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHVzZXJBZ2VudDogc3RyaW5nKSB7XG4gICAgICAgIHZhciBzY2FsZUZhY3RvciA9IDE7XG4gICAgICAgIHBvc3NpYmxlU2NhbGluZ3MuZm9yRWFjaChmdW5jdGlvbihlbnRyeSkge1xuICAgICAgICAgIGlmICh1c2VyQWdlbnQubWF0Y2goZW50cnkudXNlckFnZW50KSkge1xuICAgICAgICAgICAgc2NhbGVGYWN0b3IgPSBlbnRyeS52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2NhbGVGYWN0b3I7XG4gICAgICB9KTtcbn1cblxuZnVuY3Rpb24gYXBwbHlTY2FsZUZhY3Rvcih2YWx1ZSwgc2NhbGVGYWN0b3IsIG1ldGhvZCkge1xuICBpZiAobWV0aG9kID09PSAnbG9nMicpIHtcbiAgICByZXR1cm4gdmFsdWUgKyBNYXRoLmxvZyhzY2FsZUZhY3RvcikgLyBNYXRoLkxOMjtcbiAgfSBlbHNlIGlmIChtZXRob2QgPT09ICdzcXJ0Jykge1xuICAgIHJldHVybiB2YWx1ZSAqIE1hdGguc3FydChzY2FsZUZhY3Rvcik7XG4gIH0gZWxzZSBpZiAobWV0aG9kID09PSAnbGluZWFyJykge1xuICAgIHJldHVybiB2YWx1ZSAqIHNjYWxlRmFjdG9yO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIl19