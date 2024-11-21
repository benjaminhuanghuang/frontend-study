

## Chrome Source code

event loop
```cpp

// https://chromium.googlesource.com/chromium/src/base/+/master/message_loop/message_pump_default.cc

for(;;)
```

task type
```cpp
//https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/public/platform/task_type.h
enum class TaskType : unsigned char {

    // interaction task source.
    kUserInteraction = 2,

    kNetworking = 3,

    kWebSocket = 12,

}

Max level of Timer
```cpp
// https://chromium.googlesource.com/chromium/src/+/416877390325bd9ff0f5838efe203489f2544f3b/third_party/blink/renderer/core/frame/dom_timer.cc

// Step 11 of the algorithm at
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html requires
// that a timeout less than 4ms is increased to 4ms when the nesting level is
// greater than 5.
constexpr int kMaxTimerNestingLevel = 5;
constexpr base::TimeDelta kMinimumInterval = base::Milliseconds(4);
```

```
微队列（high priority）: promise, MutationObserver
交互队列: click
Network队列: fetch
延时队列: SetTimeout



## microtask
https://html.spec.whatwg.org/multipage/webappapis.html#perform-a-microtask-checkpoint

- Promise
- MutationObserver