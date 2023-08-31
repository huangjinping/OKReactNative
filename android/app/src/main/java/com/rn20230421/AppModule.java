package com.rn20230421;

import android.app.Activity;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AppModule extends ReactContextBaseJavaModule {
    ReactApplicationContext reactContext;

    public AppModule(ReactApplicationContext reactContext) {
        Log.d("okhttp","==========AppModule=======11===");
        this.reactContext = reactContext;
        reactContext.addActivityEventListener(mActivityEventListener);
        reactContext.addLifecycleEventListener(new LifecycleEventListener() {
            @Override
            public void onHostResume() {

            }

            @Override
            public void onHostPause() {

            }

            @Override
            public void onHostDestroy() {

            }
        });
    }

    private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {

        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {



        }
    };



    @ReactMethod
    public void onFinishApp() {
        try {

            Activity currentActivity = reactContext.getCurrentActivity();
            Toast.makeText(currentActivity, "关闭页面", Toast.LENGTH_SHORT).show();
            if (currentActivity == null) {
                return;
            }
            currentActivity.finish();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @NonNull
    @Override
    public String getName() {
        return "AppModule";
    }
}
