function LoginPage() {  
  return (
    <div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Your Email</span>
        </label>

        <label class="input-group">
          <span>Email</span>
          <input
            type="text"
            placeholder="type your email here"
            class="input input-bordered"
          />
        </label>

        <label class="label">
          <span class="label-text">Your Password</span>
        </label>

        <label class="input-group">
          <input
            type="password"
            placeholder="type your password here"
            class="input input-bordered"
          />
        </label>

        <button class="btn btn-primary btn-wide">Sign In</button>
      </div>
    </div>
  );
}

export default LoginPage;
