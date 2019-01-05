package com.reactnativesamples;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.clipsub.RNSweetAlert.RNSweetAlertPackage;
import org.vovkasm.WebImage.WebImagePackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import cl.json.RNSharePackage;
import cl.json.ShareApplication;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ShareApplication,ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNSweetAlertPackage(),
            new WebImagePackage(),
            new FastImageViewPackage(),
            new RNSharePackage(),
            new RNFetchBlobPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
  @Override
     public String getFileProviderAuthority() {
            return "com.reactnativesamples.provider";
     }
}
